namespace API.Models
{
    public class ExerciseItem
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
        public DateTime Day { get; set; }
        public string? Person { get; set; }
    }
}
