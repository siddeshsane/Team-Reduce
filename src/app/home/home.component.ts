import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  baseplayers: BasePlayer[] = [
    { name: 'siddesh', team: 'Team-A', role: 'BL' },
    { name: 'siddesh', team: 'Team-A', role: 'BL' },
  ];

  public baseplayeradded() {
    // console.log(this.baseplayers[1].role);
  }
}
export interface BasePlayer {
  name: string;
  team: string;
  role: string;
}
