import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: any[] = [
    'React',
    'Angular',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap 4',
    'jQuery',
    'Java',
    'Spring',
    'Node.js',
    'Express',
    'Python',
    'SQL',
    'JUnit',
    'Enzyme',
    'Jasmine'
  ];

  hobbies: any[] = [
    'Guitar',
    'Photography',
    'Running',
    'Hiking',
    'Traveling'
  ];

  constructor() { }

  ngOnInit() {
  }

}
