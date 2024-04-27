using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Data.Entities;
using server.Data.Models.Users;
using server.Data.Repositories.Abstract;
using server.Helpers;
using server.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Route("api/users")]
public class UserController(IPasswordHasher passwordHasher, IUsersRepository usersRepository) : Controller
{
    private readonly IPasswordHasher _passwordHasher = passwordHasher;

    private readonly IUsersRepository _usersRepository = usersRepository;
    
    // POST
    /// <summary>
    /// Create a new account and log in
    /// </summary>
    /// <returns>Return user info with auth token</returns>
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
    
    // POST
    /// <summary>
    /// Log in to account
    /// </summary>
    /// <returns>User info and token</returns>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] UserLoginModel loginUser)
    {
        var user = await _usersRepository.GetUserByLogin(loginUser.Login);
        if (user is null) return NotFound();
        if (!_passwordHasher.Verify(loginUser.Password, user.Password)) return BadRequest();
        var token = TokenHelper.GetToken(user);
        return Ok(new
        {
            user.Id,
            user.Login,
            user.OrgName,
            token
        });
    }
    
    //GET
    [HttpGet("info")]
    [Authorize]
    public async Task<IActionResult> GetUserInfo()
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
        var user = await _usersRepository.GetUserById(userId);
        if (user != null)
            return Ok(new
            {
                user.Id,
                user.Login,
                user.OrgName
            });
        return NotFound();
    }
    
    [NonAction]
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