import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  template: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() name: string = 'abcd';
}
