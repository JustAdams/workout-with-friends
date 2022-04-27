import { Component, OnInit } from '@angular/core';

import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faDumbell = faDumbbell;
  
  constructor() { }

  ngOnInit(): void {
  }

}
