using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Users;

namespace SiteConstructor.Services.Services.Abstract;

public interface IUserService
{
    public Task<IActionResult> RegisterAsync(UserRegisterModel registerModel, IResponseCookies response);

    public Task<IActionResult> LoginAsync(UserLoginModel loginModel, IResponseCookies cookies);

    public Task<IActionResult> UpdateUserAsync(long userId, UpdateUserModel updatedUser);

    public Task<IActionResult> GetUserInfo(long userId);

    public Task<IActionResult> DeleteUser(long userId);
}