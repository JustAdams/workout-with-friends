using Microsoft.EntityFrameworkCore

namespace WorkoutWithFriends.API.Models
{
    public class ExerciseContext : DbContext
    {
        public ExerciseContext(DbContextOptions<ExerciseContext> options) : base(options)
        {
        }

        public DbSet<ExerciseItem> ExerciseItems { get; set; }
    }
}
