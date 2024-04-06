using Microsoft.EntityFrameworkCore;
using server.Data.Entities;
using server.Data.Repositories.Abstract;

namespace server.Data.Repositories.Concrete;

public class UsersRepository(DatabaseContext context) : IUsersRepository
{
    public async Task AddAsync(UserEntity user)
    {
        await context.Users.AddAsync(user);

        await context.SaveChangesAsync();
    }

    public async Task<UserEntity> GetUserByLogin(string login)
    {
        return await context.Users.FirstOrDefaultAsync(u=> u.Login==login);
    }

    public async Task<UserEntity> GetUserById(long id)
    {
        return await context.Users.FirstOrDefaultAsync(u => u.Id == id);
    }
}