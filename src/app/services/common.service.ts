import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  rotatePlayers(
    rotatecount: Number,
    selectioncount: Number,
    basePlayers: Player[]
  ) {
    this.getCombinations();

    var array = ['apple', 'banana', 'lemon', 'mango', 'lichi'];
    var results = [];
    console.log('in rot');
    // Since you only want pairs, there's no reason
    // to iterate over the last element directly
    for (var i = 0; i < array.length - 1; i++) {
      // This is where you'll capture that last value
      for (var j = i + 1; j < array.length; j++) {
        let last = array[j + 1];
        if (last == undefined) last = array[i + 1];
        let last2 = array[j + 2];
        if (last == undefined) last = array[i + 2];
        results.push(array[i] + ' ' + array[j] + ' ' + last + ' ' + last2);
      }
    }

    console.log(results);
  }

  combinePlayers(
    combinecount: Number,
    selectioncount: Number,
    basePlayers: Player[]
  ) {}

  validateBase(basecount: Number, basePlayers: Player[]): Errors {
    console.log('in service');
    let errors: Errors = { class: 'INFO', messages: ['All Good'] };
    for (let i = 0; i < basecount; i++) {
      let pname = basePlayers[i].name;
      if (pname.includes('siddesh')) {
        if (errors.class == 'INFO') {
          //reset error
          errors = { class: '', messages: [] };
        }
        errors.class = 'ERRR';
        errors.messages.push('Error in Name:' + i);
      }
    }
    return errors;
  }
}
export interface Player {
  name: string;
  team: string;
  role: string;
}

export interface Errors {
  messages: string[];
  class: string;
}
