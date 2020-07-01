using Microsoft.AspNetCore.Mvc;
using Gifter.Data;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {   
        //1.
        //saving the repository as private field
        private readonly PostRepository _postRepository;

        //asking asp.net to give us a instance of our application db context gets passed into our constructor (before we were asking for "config object")
        //how we get access
            public PostController(ApplicationDbContext context)
        {
            _postRepository = new PostRepository(context);
        }
        //2. Then goes to GetAll in repository
        //repository class has to change if we want to change the database technology
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }


        // https://localhost/api/post/getbyuser/1
        //have to specify route if custom method like GetByUser
        //will respond to a request like line 34 and call the GetByUserId method
        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post); //second post is the one we see in postman its also what is passed in at the top
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }


        //will respond to a get request
        //url will have search at the end of the http
        //"q" is commonly used as a parameter in a search request
        //return is getting converted into JSON then sent out
        [HttpGet("search")]
        public IActionResult Search(string q,  bool sortDesc)
        {
            return Ok(_postRepository.Search(q, sortDesc));
        }
    }
}