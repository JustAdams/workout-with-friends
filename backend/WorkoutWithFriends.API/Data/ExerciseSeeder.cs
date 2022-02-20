using System.Text.Json;
using WorkoutWithFriends.API.Models;

namespace WorkoutWithFriends.API.Data
{
    public class ExerciseSeeder
    {
        private readonly ExerciseContext _context;
        private readonly IWebHostEnvironment _hosting;

        public ExerciseSeeder(
            ExerciseContext context, 
            IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public static async Task SeedAsync()
        {
            _context.Database.EnsureCreated();

            if (!_context.ExerciseItems.Any())
            {
                var file = Path.Combine(_hosting.ContentRootPath, "Data/sample-data.json");
                var json = File.ReadAllText(".\\sample-data.json");
                var exerciseItems = JsonSerializer.Deserialize<IEnumerable<ExerciseItem>>(json);
                _context.ExerciseItems.AddRange(exerciseItems);

                _context.SaveChanges();
            }
        }
    }
}
