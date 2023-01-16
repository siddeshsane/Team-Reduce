import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pname: string[] = ['Ram', 'Shayam', 'Mohan'];
  pteam: string[] = ['Team-A', 'Team-B', 'Team-A'];
  prole: string[] = ['WK', 'AL', 'BL'];

  items: any[];

  constructor() {}

  public baseplayeradded() {
    console.log(this.pname[1]);
  }
}
