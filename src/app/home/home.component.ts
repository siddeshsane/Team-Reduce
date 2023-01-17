import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseplayers: BasePlayer[] = [];
  basecount: Number;
  baseArray: number[] = [];

  constructor() {}

  ngOnInit() {
    this.initilize();
  }

  // initailizes the app
  private initilize() {
    for (let i = 0; i < this.basecount; i++) {
      var tempPlayer2: BasePlayer = {
        name: 'siddesh' + i,
        team: 'Team-A',
        role: 'BL',
      };
      this.baseplayers[i] = tempPlayer2;
      this.baseArray[i] = i;
    }
  }

  // when players are added
  public baseplayeradded() {
    console.log(this.baseplayers[1].role);
  }
  public setbasecount() {
    this.baseplayers = [];
    this.baseArray = [];
    this.initilize();
  }
}
export interface BasePlayer {
  name: string;
  team: string;
  role: string;
}
