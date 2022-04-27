import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../models/workout';
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faPlus = faCirclePlus;

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
    console.log(this.workouts);
    this.showAddExercise = !this.showAddExercise;
  }

}
