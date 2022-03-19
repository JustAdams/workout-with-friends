import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent implements OnInit {
  exerciseName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
