using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Helpers;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Users;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class UserService(ISitesRepository sitesRepository, IUsersRepository usersRepository, IPasswordHasher passwordHasher) : IUserService
{
    public async Task<IActionResult> RegisterAsync(UserRegisterModel registerModel, IResponseCookies cookies)
    {
        var userExists = await usersRepository.IsLoginExists(registerModel.Login);
        var siteExists = await sitesRepository.IsSiteNameExists(registerModel.SiteAddress);
        if (userExists || siteExists) return new ConflictResult();
        var user = CreateUser(registerModel, passwordHasher);
        var site = new SiteEntity{ User = user, SiteAddress = registerModel.SiteAddress, SiteName = registerModel.SiteName};
        user.Site = site;
        await usersRepository.AddAsync(user);
        var token = TokenHelper.GetToken(user);
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true
        };
        cookies.Append("token", token, cookieOptions);
        return new OkObjectResult(new
        {
            user.Id,
            user.Login,
            user.OrgName,
            siteName = site.SiteName,
            siteAddress = site.SiteAddress
        });
    }

    public async Task<IActionResult> LoginAsync(UserLoginModel loginModel, IResponseCookies cookies)
    {
        var user = await usersRepository.GetUserByLogin(loginModel.Login);
        if (user is null) return new NotFoundObjectResult(new{ Field = nameof(loginModel.Login)});
        if (!passwordHasher.Verify(loginModel.Password, user.Password)) 
            return new BadRequestObjectResult(new { Field = nameof(loginModel.Password)});
        var token = TokenHelper.GetToken(user);
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true
        };
        cookies.Append("token", token, cookieOptions);
        return new OkObjectResult(new
        {
            user.Id,
            user.Login,
            user.OrgName
        });
    }

    public async Task<IActionResult> GetUserInfo(long userId)
    {
        var user = await usersRepository.GetUserById(userId);
        var site = await sitesRepository.GetSiteByIdAsync(userId);
        if (user is not null)
        {
            return new OkObjectResult(new
            {
                user.Id,
                user.Login,
                siteAddress = site.SiteAddress,
                siteName = site.SiteName,
                user.OrgName
            });
        }

        return new NotFoundResult();
    }

    public async Task<IActionResult> DeleteUser(long userId)
    {
        await usersRepository.DeleteAsync(userId);
        return new OkResult();
    }

    private UserEntity CreateUser(UserRegisterModel newUser, IPasswordHasher hasher)
    {
        var password = hasher.Hash(newUser.Password);

        var user = new UserEntity
        {
            Login = newUser.Login,
            Password = password,
            OrgName = newUser.OrgName
        };
        
        return user;
    }
}