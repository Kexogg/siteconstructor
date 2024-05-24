using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Helpers;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Users;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Route("api/users")]
public class UserController(IPasswordHasher passwordHasher,IUserService userService, IUsersRepository usersRepository) : Controller
{
    private readonly IPasswordHasher _passwordHasher = passwordHasher;

    private readonly IUsersRepository _usersRepository = usersRepository;

    private readonly IUserService _userService = userService;
    
    // POST
    /// <summary>
    /// Create a new account and log in
    /// </summary>
    /// <returns>Return user info with auth token</returns>
    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] UserRegisterModel newUser)
    {
        return await _userService.RegisterAsync(newUser, Response.Cookies);
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
        return await _userService.LoginAsync(loginUser, Response.Cookies);
    }
    
    //GET
    [HttpGet("info")]
    [Authorize]
    public async Task<IActionResult> GetUserInfo()
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _userService.GetUserInfo(userId);
    }

    [HttpDelete("delete")]
    [Authorize]
    public async Task<IActionResult> Delete()
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _userService.DeleteUser(userId);
    }
}