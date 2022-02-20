import { Component, OnInit } from '@angular/core';
import { EXERCISES } from '../data/sample-exercises';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  exercises?: Exercise[];
  searchInput?: string;

  constructor() { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exercises = EXERCISES;
  }


}
