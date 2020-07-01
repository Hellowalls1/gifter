using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;


//we are saving an instance of our instance d
namespace Gifter.Repositories
{
    public class PostRepository
    {
        //saving an instance of our instance db context
        private readonly ApplicationDbContext _context;

        //constructor that accepts dbContext that we save in the private field
        public PostRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        //getting all
        public List<Post> GetAll()
        {
            return _context.Post.Include(p => p.UserProfile).Include(p => p.Comment).ToList();
        }

        //Linq methods let us filter 
        //getting individual post by id
        //would normally need to create a sql query that would join the UserProfile id onto post 
        public Post GetById(int id)
        {
            return _context.Post.Include(p => p.Comment).Include(p => p.UserProfile) //accessing the full object "UserProfile" which is on the post model
                                .FirstOrDefault(p => p.Id == id); //getting the first post with id
        }
        public List<Post> GetByUserProfileId(int id)
        {
            return _context.Post.Include(p => p.Comment).Include(p => p.UserProfile)
                            .Where(p => p.UserProfileId == id) //where userProfileId is passed in
                            .OrderBy(p => p.Title) //order by the title
                            .ToList();
        }

        public void Add(Post post)
        {
            _context.Add(post);
            _context.SaveChanges();
        }

        public void Update(Post post)
        {
            _context.Entry(post).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var post = GetById(id); 
            _context.Post.Remove(post);
            _context.SaveChanges();
        }

    }
}