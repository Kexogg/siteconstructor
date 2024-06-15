using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Users;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Route("api/user")]
public class UserController(IPasswordHasher passwordHasher, IUserService userService, 
    IUsersRepository usersRepository, IBucketService bucketService) : Controller
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

    [HttpPatch]
    [Authorize]
    public async Task<IActionResult> PatchUser([FromBody] UpdateUserModel updatedUser)
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await userService.UpdateUserAsync(userId, updatedUser);
    }
    
    //GET
    [HttpGet("info")]
    [Authorize]
    public async Task<IActionResult> GetUserInfo()
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _userService.GetUserInfo(userId);
    }

    [HttpDelete]
    [Authorize]
    public async Task<IActionResult> Delete()
    {
        var userId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        bucketService.DeleteSiteFolderAsync(userId);
        
        return await _userService.DeleteUser(userId);
    }
}