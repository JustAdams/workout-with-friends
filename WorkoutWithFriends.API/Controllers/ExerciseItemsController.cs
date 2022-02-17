#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutWithFriends.API.Models;

namespace WorkoutWithFriends.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseItemsController : ControllerBase
    {
        private readonly ExerciseContext _context;

        public ExerciseItemsController(ExerciseContext context)
        {
            _context = context;
        }

        // GET: api/ExerciseItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseItem>>> GetExerciseItems()
        {
            return await _context.ExerciseItems.ToListAsync();
        }

        // GET: api/ExerciseItems/5
        [HttpGet("{id:int}", Name="GetById")]
        public async Task<ActionResult<ExerciseItem>> GetExerciseItem(int id)
        {
            var exerciseItem = await _context.ExerciseItems.FindAsync(id);

            if (exerciseItem == null)
            {
                return NotFound();
            }

            return exerciseItem;
        }

        /// <summary>
        /// Retrieve list of exercises given an exercise name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{name}")]
        public async Task<ActionResult<List<ExerciseItem>>> GetExerciseItemsByName(string name)
        {
            var exerciseItems = await _context.ExerciseItems.Where(e => e.Name == name).ToListAsync();

            if (!exerciseItems.Any()) { return NotFound(); }

            return exerciseItems;
        }

        /// <summary>
        /// Retrieve a list of all exercises for a given person
        /// </summary>
        /// <param name="person">Name of the person getting exericses for</param>
        /// <returns></returns>
        [HttpGet("/individual/{personname}")]
        public async Task<ActionResult<List<ExerciseItem>>> GetExerciseItemsByPerson(string personname)
        {
            var exerciseItems = await _context.ExerciseItems.Where(e => e.Person == personname).ToListAsync();

            if (!exerciseItems.Any()) { return NotFound(); }

            return exerciseItems;
        }

        // PUT: api/ExerciseItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseItem(int id, ExerciseItem exerciseItem)
        {
            if (id != exerciseItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(exerciseItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExerciseItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseItem>> PostExerciseItem(ExerciseItem exerciseItem)
        {
            _context.ExerciseItems.Add(exerciseItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseItem", new { id = exerciseItem.Id }, exerciseItem);
        }

        // DELETE: api/ExerciseItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseItem(int id)
        {
            var exerciseItem = await _context.ExerciseItems.FindAsync(id);
            if (exerciseItem == null)
            {
                return NotFound();
            }

            _context.ExerciseItems.Remove(exerciseItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseItemExists(int id)
        {
            return _context.ExerciseItems.Any(e => e.Id == id);
        }
    }
}
