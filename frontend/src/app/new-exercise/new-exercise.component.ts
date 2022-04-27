import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent {
  model = new Workout(0, '', 0, 0, '', '');
  submitted = false;

  addExercise(): void {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

}
