import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseplayers: BasePlayer[] = [];
  baseCount: Number = 6;
  tempPlayer: BasePlayer = { name: 'siddesh', team: 'Team-A', role: 'BL' };

  constructor() {}

  ngOnInit() {
    this.initilize();
  }

  // initailizes the app
  private initilize() {
    for (let i = 0; i < this.baseCount; i++) {
      this.baseplayers.push(this.tempPlayer);
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
