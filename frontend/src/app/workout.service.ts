import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXERCISES } from './data/sample-exercises';
import { Workout } from './models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutsUrl = 'api/workouts';

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    var res = this.http.get<Workout[]>(this.workoutsUrl);
    return res;
  }
}
