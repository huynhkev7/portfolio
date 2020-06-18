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
  selector: 'app-ixp',
  templateUrl: './ixp.component.html',
  styleUrls: ['./ixp.component.scss']
})
export class IxpComponent implements OnInit {
  projectName = 'Integrated Experience Platform';
  projectType = 'Internal Sales Tool';
  heroUrl = './assets/img/ixp/ixp1.jpg';
  projectDescription = `The Integrated Experience Platform (IXP) is a micro-frontend solution that provides AT&T business center employees the ability to quickly track customer order information. Utilizing cutting edge microservice and web component technology, IXP is a fully operating and customizable user interface that is easily consumable by five critical AT&T applications and counting. IXP dramatically reduces time and development costs by being a portable widget on any web-based application.`;
  roleDescription = `As a full-stack engineer, I worked as both the subject matter expert in developing web components and managing microservice health and deployments. I worked on back-end mapping over 900 data points and developed scalable information visualizations. In addition,  I developed core API endpoints connected to the K2View fabric and admin utility to manage user permissions.`;
  skills: string[] = ['Angular 2', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Kubernetes', 'Docker', 'Jasmine', 'HTML', 'CSS', 'JavaScript'];
  duration = 'February 2019 - December 2019';
  protect = true;

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/ixp/ixp1.jpg',
        description: 'Dashboard page',
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/ixp/ixp2.jpg',
        description: 'Order handoff page'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/ixp/ixp3.jpg',
        description: 'Reports page',
      }
    ),
    new Image(
      3,
      { // modal
        img: './assets/img/ixp/ixp4.jpg',
        description: 'User admin page',
      }
    ),
    new Image(
      4,
      { // modal
        img: './assets/img/ixp/ixp5.jpg',
        description: 'Business Object Reports',
      }
    ),
    new Image(
      5,
      { // modal
        img: './assets/img/ixp/ixp6.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      6,
      { // modal
        img: './assets/img/ixp/ixp7.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      7,
      { // modal
        img: './assets/img/ixp/ixp8.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      8,
      { // modal
        img: './assets/img/ixp/ixp9.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      9,
      { // modal
        img: './assets/img/ixp/ixp10.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      10,
      { // modal
        img: './assets/img/ixp/ixp11.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      11,
      { // modal
        img: './assets/img/ixp/ixp12.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      12,
      { // modal
        img: './assets/img/ixp/ixp13.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      13,
      { // modal
        img: './assets/img/ixp/ixp14.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      14,
      { // modal
        img: './assets/img/ixp/ixp15.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      15,
      { // modal
        img: './assets/img/ixp/ixp16.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      16,
      { // modal
        img: './assets/img/ixp/ixp16.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      17,
      { // modal
        img: './assets/img/ixp/ixp17.jpg',
        description: 'Data repository for report generations'
      }
    ),
    new Image(
      18,
      { // modal
        img: './assets/img/ixp/ixp18.jpg',
        description: 'Data repository for report generations'
      }
    )
  ];

  constructor() { }
  ngOnInit() {
  }
}
