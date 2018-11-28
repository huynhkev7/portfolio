import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toRotate: any;
  el: any;
  loopNum: any;
  period: any;
  txt: String;
  isDeleting: Boolean;

  constructor() { }

  public TxtRotate(el, toRotate, period): void {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  private tick(): void {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    this.el.innerHTML = '<span>' + this.txt + '</span>';
    const that = this;
    let delta = 25;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function() {
      that.tick();
    }, delta);
  }

  ngOnInit() {
      this.smoothScrolling();
      const elements = document.getElementsByClassName('txt-rotate');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          this.TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
      document.body.appendChild(css);
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
    }
}
