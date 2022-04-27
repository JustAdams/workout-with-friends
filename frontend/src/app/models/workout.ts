export class Workout {
  constructor(
    public id: number,
    public workoutName: string,
    public reps: number,
    public weight: number,
    public day: string,
    public personName: string
  ) {}
}
