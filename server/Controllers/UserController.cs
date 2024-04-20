using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Data.Entities;
using server.Data.Models.Users;
using server.Data.Repositories.Abstract;
using server.Helpers;
using server.Services.Abstract;


namespace server.Controllers;

public class UserController(IPasswordHasher passwordHasher, IUsersRepository usersRepository) : Controller
{
    private readonly IPasswordHasher _passwordHasher = passwordHasher;

    private readonly IUsersRepository _usersRepository = usersRepository;
    
    // POST
    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] UserRegisterModel newUser)
    {
        var userExists = await _usersRepository.IsLoginExists(newUser.Login);
        if (userExists) return Conflict();
        var user = CreateUser(newUser, _passwordHasher);
        await _usersRepository.AddAsync(user);
        var token = TokenHelper.GetToken(user);
        return Ok(new
        {
            user.Id,
            user.Login,
            user.OrgName,
            token
        });
    }
    
    public UserEntity CreateUser(UserRegisterModel newUser, IPasswordHasher hasher)
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