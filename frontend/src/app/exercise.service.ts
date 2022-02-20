import { Injectable } from '@angular/core';
import { EXERCISES } from './data/sample-exercises';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercises() {
    return EXERCISES;
  }
}
