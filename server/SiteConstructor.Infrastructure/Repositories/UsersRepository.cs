using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class UsersRepository(DatabaseContext context) : IUsersRepository
{
    private readonly DatabaseContext _context = context;
    public async Task AddAsync(UserEntity? user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task<UserEntity?> GetUserByLogin(string login)
    {
        return await _context.Users.FirstOrDefaultAsync(u=> u.Login==login);
    }

    public async Task<UserEntity?> GetUserById(long id)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
    }

    public async Task<bool> IsLoginExists(string login)
    {
        return await _context.Users.AnyAsync(u => u.Login == login);
    }

    public async Task DeleteAsync(long id)
    {
        await _context.Users.Where(u => u.Id == id).ExecuteDeleteAsync();
        await _context.SaveChangesAsync();
    }
}