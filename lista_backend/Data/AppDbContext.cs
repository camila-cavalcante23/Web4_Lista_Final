using Microsoft.EntityFrameworkCore;
using lista_backend.Models;


using ModelTask = lista_backend.Models.Task;

namespace lista_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<ModelTask> Tasks { get; set; }
    }
}
