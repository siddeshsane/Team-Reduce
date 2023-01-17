import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  validateBase(basecount: Number, basePlayers: BasePlayer[]): Errors {
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
export interface BasePlayer {
  name: string;
  team: string;
  role: string;
}

export interface Errors {
  messages: string[];
  class: string;
}
