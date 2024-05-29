using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Helpers;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Users;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class UserService(IUsersRepository usersRepository, IPasswordHasher passwordHasher) : IUserService
{
    public async Task<IActionResult> RegisterAsync(UserRegisterModel registerModel, HttpContext context)
    {
        var userExists = await usersRepository.IsLoginExists(registerModel.Login);
        if (userExists) return new ConflictObjectResult(new {Field = nameof(registerModel.Login)});
        var user = CreateUser(registerModel, passwordHasher);
        await usersRepository.AddAsync(user);
        var claimsIdentity = TokenHelper.GetToken(user);
        
        await context.SignInAsync(new ClaimsPrincipal(claimsIdentity));
        return new OkObjectResult(new
        {
            user.Id,
            user.Login,
            user.OrgName
        });
    }

    public async Task<IActionResult> LoginAsync(UserLoginModel loginModel, HttpContext context)
    {
        var user = await usersRepository.GetUserByLogin(loginModel.Login);
        if (user is null) return new NotFoundObjectResult(new{ Field = nameof(loginModel.Login)});
        if (!passwordHasher.Verify(loginModel.Password, user.Password)) 
            return new BadRequestObjectResult(new { Field = nameof(loginModel.Password)});
        var claimsIdentity = TokenHelper.GetToken(user);
        
        await context.SignInAsync(new ClaimsPrincipal(claimsIdentity));
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
        if (user is not null)
        {
            return new OkObjectResult(new
            {
                user.Id,
                user.Login,
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