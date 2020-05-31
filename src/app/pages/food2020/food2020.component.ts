import { Component, OnInit } from '@angular/core';
import {
  AccessibilityConfig,
  Action,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  Image,
  ImageModalEvent,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  PreviewConfig,
  LoadingConfig,
  LoadingType,
  CurrentImageConfig,
  AdvancedLayout,
  GridLayout,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  BreakConfig
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-food2020',
  templateUrl: './food2020.component.html',
  styleUrls: ['./food2020.component.scss']
})
export class Food2020Component implements OnInit {
  projectName = 'Food 2020';
  projectType = 'Social Event Planner';
  heroUrl = './assets/img/food2020/food_2020_5.jpg';
  projectDescription = `Food2020 was a mobile responsive Angular application developed as part of the AT&T intern coding challenge. Its purpose was to improve workplace culture by providing a platform for employees to easily socialize and coordinate luncheon events.`;
  roleDescription = `As a software developer intern, I collaborated with a team of five other interns, under a highly Agile development process. I was responsible for integrating front-end functionality, such as party voting, restaurant searching, interfacing with multiple APIs (Yelp, Google, etc.), and performing CRUD operations for managing events.`;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'Parse'];
  duration = 'September 2015 - June 2016';

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/food2020/food2020_1.jpg',
        description: 'Upcoming events'
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/food2020/food_2020_2.jpg',
        description: 'Event invitations'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/food2020/food_2020_3.jpg',
        description: 'Map view of nearby restaurants'
      }
    ),
    new Image(
      3,
      { // modal
        img: './assets/img/food2020/food_2020_4.jpg',
        description: 'List view of nearby restaurants'
      }
    ),
    new Image(
      4,
      { // modal
        img: './assets/img/food2020/food_2020_6.jpg',
        description: 'User research findings',
        extUrl: 'http://www.google.com'
      }
    )
  ];
  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  constructor() { }

  ngOnInit() {
  }
}
