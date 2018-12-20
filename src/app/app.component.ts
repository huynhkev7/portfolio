import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

import { GlobalVariablesService } from './services/global-variables.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';
  loading = false;
  constructor(private router: Router, public globals: GlobalVariablesService) {
    this.router.events.subscribe((event: Event) => {
      console.log('test');
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd: {
          setTimeout(function() {
            this.loading = false;
          }, 1000);
          break;
        }
        case event instanceof NavigationCancel: {
          setTimeout(function() {
            this.loading = false;
          }, 1000);
          break;
        }
        case event instanceof NavigationError: {
          setTimeout(function() {
            this.loading = false;
          }, 1000);
          break;
        }
        default: {
          setTimeout(function() {
            this.loading = false;
          }, 1000);
          break;
        }
      }
    });
  }

  onActivate(event) {
    window.scrollTo(0, 0);
  }
}
