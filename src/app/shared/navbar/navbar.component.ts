import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title: String;
  public test: Object = {
  };

  constructor() {
   }

  ngOnInit(): void {
  }

  private hello(): String {
    return '';
  }

}
