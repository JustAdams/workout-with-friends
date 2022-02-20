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

  search(input: string): void {
    this.searchInput = input.toUpperCase();
    this.exercises = this.exerciseService.getExercises().filter(e => e.name.toUpperCase().includes(this.searchInput!) || e.person.toUpperCase().includes(this.searchInput!));
  }

  toggleAddExercise(): void {
    this.showAddExercise = !this.showAddExercise;
  }

}
