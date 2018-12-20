import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  private showProgressBar = false;
  constructor() { }
  setProgressBar(flag) {
    this.showProgressBar = flag;
  }
  getProgressBar() {
    return this.showProgressBar;
  }
}
