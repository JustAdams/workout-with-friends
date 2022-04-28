import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { EXERCISES } from './data/sample-exercises';
import { Workout } from './models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutsUrl = 'api/workouts';
  httpOptions = {
    headers: new HttpHeaders({ 
      'accept': 'application/json',
      'Content-Type': 'application/json' 
    }),
  };
  
  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    var res = this.http.get<Workout[]>(this.workoutsUrl);
    return res;
  }

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.workoutsUrl, workout, this.httpOptions)
      .pipe(tap((newWorkout: Workout) => console.log(`added workout: ${newWorkout.workoutName}`)));
  }
}
