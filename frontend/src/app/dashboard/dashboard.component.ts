import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../models/workout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  workouts?: Workout[];
  searchInput?: string;
  showAddExercise = false;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

  toggleAddExercise(): void {
    this.showAddExercise = !this.showAddExercise;
  }

}
