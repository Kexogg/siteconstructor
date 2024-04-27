using server.Data.Entities;

namespace server.Data.Repositories.Abstract;

public interface IUsersRepository
{
    public Task AddAsync(UserEntity? user);

    public Task<UserEntity?> GetUserByLogin(string login);

    public Task<UserEntity?> GetUserById(long id);

    public Task<bool> IsLoginExists(string login);
}