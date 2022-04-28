import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent {
  model = new Workout('', 0, 0, 'test day', 'test name');
  submitted = false;
  
  constructor(private workoutService: WorkoutService) {}

  addExercise(): void {
    this.submitted = true;
    this.workoutService.addWorkout(this.model).subscribe(workout => console.log(workout));
  }

}
