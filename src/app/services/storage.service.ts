import { Injectable } from '@angular/core';
import { Player } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  BasePlayer: Player[] = [];
  RotationalPlayers: Player[] = [];
  CombinationPlayers: Player[] = [];

  generatecombinatations(total: number, selection: number, player: Player[]) {
    var valuesArray = ['apple', 'banana', 'lemon', 'mango', 'lichi'];
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < valuesArray.length; j++) {
        if (i & Math.pow(2, j)) {
          temp.push(valuesArray[j]);
        }
      }
      if (temp.length > 0) {
        combi.push(temp);
      }
    }

    combi.sort((a, b) => a.length - b.length);
    console.log(combi.join('\n'));
    //return combi;
  }
}
export interface Team {
  id: number;
  baseplayers: Player;
  rotationplayers: Player;
  combinationplayers: Player;
}
