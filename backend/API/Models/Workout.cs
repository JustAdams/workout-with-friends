using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Workout
    {
        public int Id { get; set; }
        [Required]
        public string? WorkoutName { get; set; }
        [Required]
        public int Reps { get; set; }
        [Required]
        public int Weight { get; set; }
        [Required]
        public string? Day { get; set; }
        [Required]
        public string? PersonName { get; set; }
    }
}