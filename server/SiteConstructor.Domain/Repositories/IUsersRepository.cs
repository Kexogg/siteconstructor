using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface IUsersRepository
{
    public Task AddAsync(UserEntity? user);

    public Task<UserEntity?> GetUserByLogin(string login);

    public Task<UserEntity?> GetUserById(long id);

    public Task<bool> IsLoginExists(string login);
}