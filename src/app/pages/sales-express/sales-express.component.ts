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
  selector: 'app-sales-express',
  templateUrl: './sales-express.component.html',
  styleUrls: ['./sales-express.component.scss']
})
export class SalesExpressComponent implements OnInit {
  projectName = 'Sales Express';
  projectType = 'Internal Sales Tool';
  heroUrl = './assets/img/sales_express/dashboard_1.jpg';
  projectDescription = `Sales Express is an AT&T internal sales tool used by over 14,000 business sellers. Its purpose is to provide a streamlined and intuitive sales experience for discovering, contracting, subscribing customers to over 20 core AT&T products and services.`;
  roleDescription = `As a software engineer for Sales Express, I work on both the infrastructure and reporting teams. I am responsible for integrating common service utilities to improve overall application performance, APIs, security, and IT workflows. In addition, I lead the design and maintenance of Sales Express reporting utilities, so that critical business data is sent to AT&T leadership.`;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Angular', 'Java', 'Spring', 'Hibernate', 'Oracle SQL'];
  duration = 'June 2016 - December 2018';

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/sales_express/dashboard_1.jpg',
        description: 'Dashboard page',
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/sales_express/anira.jpg',
        description: 'Order handoff page'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/sales_express/report_4.jpg',
        description: 'Reports page',
      }
    ),
    new Image(
      3,
      { // modal
        img: './assets/img/sales_express/user_admin_3.jpg',
        description: 'User admin page',
      }
    ),
    new Image(
      4,
      { // modal
        img: './assets/img/sales_express/erbi_1.jpg',
        description: 'Business Object Reports',
      }
    ),
    new Image(
      5,
      { // modal
        img: './assets/img/sales_express/universe.jpg',
        description: 'Data repository for report generations'
      }
    )
  ];

  constructor() { }
  ngOnInit() {
  }
}
