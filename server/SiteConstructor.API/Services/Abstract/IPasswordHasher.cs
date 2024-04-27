namespace server.Services.Abstract;

public interface IPasswordHasher
{
    public string Hash (string password);

    public bool Verify(string inputPassword, string hashedPassword);
}