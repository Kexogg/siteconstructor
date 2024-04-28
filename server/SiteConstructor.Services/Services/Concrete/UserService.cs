using Microsoft.AspNetCore.Mvc;
using server.Helpers;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Users;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class UserService(IUsersRepository usersRepository, IPasswordHasher passwordHasher, ISitesRepository sitesRepository) : IUserService
{
    private readonly IUsersRepository _usersRepository = usersRepository;
    
    private readonly IPasswordHasher _passwordHasher = passwordHasher;

    private readonly ISitesRepository _sitesRepository = sitesRepository;
    public async Task<IActionResult> RegisterAsync(UserRegisterModel registerModel)
    {
        var userExists = await _usersRepository.IsLoginExists(registerModel.Login);
        if (userExists) return new ConflictObjectResult(new {Field = nameof(registerModel.Login)});
        var user = CreateUser(registerModel, _passwordHasher);
        await _usersRepository.AddAsync(user);
        var token = TokenHelper.GetToken(user);
        return new OkObjectResult(new
        {
            user.Id,
            user.Login,
            user.OrgName,
            token
        });
    }

    public async Task<IActionResult> LoginAsync(UserLoginModel loginModel)
    {
        var user = await _usersRepository.GetUserByLogin(loginModel.Login);
        if (user is null) return new NotFoundObjectResult(new{ Field = nameof(loginModel.Login)});
        if (!_passwordHasher.Verify(loginModel.Password, user.Password)) 
            return new BadRequestObjectResult(new { Field = nameof(loginModel.Password)});
        var token = TokenHelper.GetToken(user);
        return new OkObjectResult(new
        {
            user.Id,
            user.Login,
            user.OrgName,
            token
        });
    }

    public async Task<IActionResult> GetUserInfo(long userId)
    {
        var user = await _usersRepository.GetUserById(userId);
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
        await _usersRepository.DeleteAsync(userId);
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