import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() companyName: string;
  @Input() projectName: string;
  @Input() jobTitle: string;
  @Input() jobDescription: string;
  @Input() tags: string[];
  @Input() position: string;
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
