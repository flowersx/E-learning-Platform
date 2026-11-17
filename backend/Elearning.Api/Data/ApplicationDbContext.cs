using Elearning.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Elearning.Api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options
    ) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}