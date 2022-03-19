import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
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

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exercises = this.workoutService.getWorkouts();
  }

  toggleAddExercise(): void {
    this.showAddExercise = !this.showAddExercise;
  }

}
