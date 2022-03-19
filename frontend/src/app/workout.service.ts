import { Injectable } from '@angular/core';
import { EXERCISES } from './data/sample-exercises';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  getWorkouts() {
    return EXERCISES;
  }
}
