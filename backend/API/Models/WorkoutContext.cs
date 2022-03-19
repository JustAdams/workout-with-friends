using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Workout> Workouts => Set<Workout>();
    }
}