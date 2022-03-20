import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXERCISES } from './data/sample-exercises';
import { Workout } from './models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  getWorkouts(): Observable<Workout[]> {
    const workouts = of(EXERCISES);
    return workouts;
  }
}
