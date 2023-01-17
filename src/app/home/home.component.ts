import { Component, OnInit } from '@angular/core';
import { BasePlayer, CommonService } from '../services/common.service';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  baseplayers: BasePlayer[] = [];
  basecount: Number;
  baseArray: number[] = [];
  comservice: CommonService;
  errormsg: string;

  constructor(commonservice: CommonService) {
    this.comservice = commonservice;
  }

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
    this.errormsg = this.comservice.validateBase(
      this.basecount,
      this.baseplayers
    );
  }
  public setbasecount() {
    this.baseplayers = [];
    this.baseArray = [];
    this.initilize();
  }
}
