import { Component, OnInit, Input, HostListener} from '@angular/core';
declare var jQuery: any;
import { GlobalVariablesService } from '../../services/global-variables.service';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import * as _ from 'lodash';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';
  import { Observable, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: String;
  public loading: boolean;
  progresValue: number;
  rangeArray: number[];


  public test: Object = {
  };

  constructor(
    private router: Router,
    public global: GlobalVariablesService
  ) {
    this.progresValue = 0;
    this.rangeArray = new Array(100);
        // this.loading = true;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.configureTrue(this.global);
      } else {
        this.configureFalse(this.global);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
   const element = document.documentElement,
   body = document.body,
   scrollTop = 'scrollTop',
   scrollHeight = 'scrollHeight';
   this.progresValue =
   (element[scrollTop] || body[scrollTop]) /
   ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
  }

  configureTrue(ev): void {
    ev.setToTrue();
  }
  configureFalse(ev): void {
    setTimeout(function() {
        ev.setToFalse();
    }, 250);
  }

  getStatus(): void {
    this.global.getStatus().subscribe(value => this.loading = value);
  }

  ngOnInit(): void {
    this.smoothScrolling();
  }

  showBlackBar(): boolean {
    const excludes = ['/', '/#about', '/#featured', '/splash'];
    return !_.includes(excludes, this.router.url);
  }

  isActive(currentNav: string): boolean {
    if (_.isEqual(this.router.url, '')) {
      return true;
    }

    return _.isEqual(this.router.url, currentNav);
  }

  smoothScrolling(): void {
    // Smooth scrolling using jQuery easing
    jQuery('a.js-scroll-trigger[href*=\'#\']:not([href=\'#\'])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          jQuery('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, 'easeInOutExpo');
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    jQuery('.js-scroll-trigger').click(function () {
      jQuery('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    jQuery('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });

    // Collapse Navbar
    const navbarCollapse = function () {
      const mainNav = jQuery('#mainNav');
      const path = location.pathname.replace(/^\//, '');
      if (mainNav.offset().top > 100) {
        mainNav.addClass('navbar-shrink');
      } else {
        mainNav.removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    jQuery(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    jQuery('.portfolio-modal').on('show.bs.modal', function (e) {
      jQuery('.navbar').addClass('d-none');
    });
    jQuery('.portfolio-modal').on('hidden.bs.modal', function (e) {
      jQuery('.navbar').removeClass('d-none');
    });
  }

  private hello(): String {
    return '';
  }

}
