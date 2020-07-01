using Gifter.Models;
using Microsoft.EntityFrameworkCore;

namespace Gifter.Data
{
    public class ApplicationDbContext : DbContext
    {
        //constructor that takes DbContextOptions and passes it to the base class
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        //create a db set for each of the tables you want to interact with in the database
        //made based on the models
        //base the model there as a generic perameter
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Post> Post { get; set; } 

        public DbSet<Comment> Comment { get; set; }
    }
}