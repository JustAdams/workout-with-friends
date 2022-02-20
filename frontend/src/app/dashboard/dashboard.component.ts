import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { EXERCISES } from '../data/sample-exercises';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  exercises?: Exercise[];
  searchInput?: string;
  showAddExercise = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exercises = this.exerciseService.getExercises();
  }

  toggleAddExercise(): void {
    this.showAddExercise = !this.showAddExercise;
  }

}
