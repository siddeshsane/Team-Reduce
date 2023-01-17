import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  validateBase(basecount: Number, basePlayers: BasePlayer[]): string {
    console.log('in service');
    for (let i = 0; i < basecount; i++) {
      let pname = basePlayers[i].name;
      if (pname.includes('siddesh')) return 'error in name';
    }
    return 'good';
  }
}
export interface BasePlayer {
  name: string;
  team: string;
  role: string;
}
