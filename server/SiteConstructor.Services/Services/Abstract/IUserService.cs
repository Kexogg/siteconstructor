using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Users;

namespace SiteConstructor.Services.Services.Abstract;

public interface IUserService
{
    public Task<IActionResult> RegisterAsync(UserRegisterModel registerModel);

    public Task<IActionResult> LoginAsync(UserLoginModel loginModel);

    public Task<IActionResult> GetUserInfo(long userId);

    public Task<IActionResult> DeleteUser(long userId);
}