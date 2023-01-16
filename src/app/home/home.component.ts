import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseplayers: BasePlayer[] = [];
  baseCount: Number = 6;

  constructor() {}

  ngOnInit() {
    this.initilize();
  }

  // initailizes the app
  private initilize() {
    for (let i = 0; i < this.baseCount; i++) {
      var tempPlayer2: BasePlayer = {
        name: 'siddesh' + i,
        team: 'Team-A',
        role: 'BL',
      };
      this.baseplayers[i] = tempPlayer2;
    }
  }

  // when players are added
  public baseplayeradded() {
    console.log(this.baseplayers[1].role);
  }
}
export interface BasePlayer {
  name: string;
  team: string;
  role: string;
}
