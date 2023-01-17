import { Injectable } from '@angular/core';
import { Player } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  BasePlayer: Player[] = [];
}
export interface Team {
  id: number;
  baseplayers: Player;
  rotationplayers: Player;
  combinationplayers: Player;
}
