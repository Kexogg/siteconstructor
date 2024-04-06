using server.Data.Entities;
using server.Data.Models.Users;
using server.Services.Abstract;

namespace server.Controllers;

public class UserController
{
    public UserEntity CreateUser(UserRegisterModel newUser, IPasswordHasher hasher)
    {
        var password = hasher.Hash(newUser.Password);

        var user = new UserEntity()
        {
            Login = newUser.Login,
            Password = password,
            OrgName = newUser.OrgName
        };
        return user;
    }
}