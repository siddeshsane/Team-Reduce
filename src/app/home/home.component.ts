import { Component, OnInit } from '@angular/core';
import { Player, CommonService, Errors } from '../services/common.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  players: Player[] = [];
  totalcount: Number = 0;
  selectioncount: Number = 0;
  baseArray: number[] = [];
  comservice: CommonService;
  stoservice: StorageService;
  errormsgs: Errors = { class: 'INFO', messages: ['All Good'] };

  constructor(commonservice: CommonService, storageservice: StorageService) {
    this.comservice = commonservice;
    this.stoservice = storageservice;
  }

  ngOnInit() {
    this.initilize();
  }

  // initailizes the app
  private initilize() {
    for (let i = 0; i < this.totalcount; i++) {
      var tempPlayer2: Player = {
        name: 'siddesh' + i,
        team: 'Team-A',
        role: 'BL',
      };
      this.players[i] = tempPlayer2;
      this.baseArray[i] = i;
    }
  }

  // when players are added
  public playersadded(type: string) {
    this.errormsgs = this.comservice.validateBase(
      this.totalcount,
      this.players
    );
    if (this.errormsgs.class == 'INFO') {
      switch (type) {
        case 'base': {
          this.stoservice.BasePlayer = this.players;
          console.log(this.stoservice.BasePlayer);
          break;
        }

        case 'rotation': {
          this.comservice.rotatePlayers(
            this.totalcount,
            this.selectioncount,
            this.players
          );

          this.stoservice.RotationalPlayers = this.players;
          console.log(this.stoservice.BasePlayer);
          break;
        }

        case 'combination': {
          this.stoservice.CombinationPlayers = this.players;
          console.log(this.stoservice.BasePlayer);
          break;
        }
      }
    }
  }
  public setcount() {
    if (this.totalcount == 0 || this.selectioncount == 0) return;

    this.players = [];
    this.baseArray = [];
    this.initilize();
  }
}
