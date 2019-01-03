import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  public flag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.flag.next(false);
  }

  public setToTrue() {
    this.flag.next(true);
  }
  public setToFalse() {
    this.flag.next(false);
  }
  public getStatus() {
    return this.flag;
  }
}
