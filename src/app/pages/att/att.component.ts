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
  selector: 'app-att',
  templateUrl: './att.component.html',
  styleUrls: ['./att.component.scss']
})
export class AttComponent implements OnInit {
  projectName = 'AT&T';
  projectType = 'E-Commerce';
  heroUrl = './assets/img/att/att5.jpg';
  projectDescription = `One of AT&T's most heavily trafficked value streams, AT&T.com supports millions of customers nationwide shop their favorite AT&T products and manage their cellular services. The product details page (PDP) serves as part of ATT.com's buy flow for products ranging from phones, tablets, accessories, and more.`;
  roleDescription = `As a full-stack engineer, I helped lead and develop AT&T.com's redesign initative (PSC) to revolutionize the buy flow experience. I developed highly complex and reusable pricing components and service providers, allowing customers to be able to learn, purchase, and configure their devices all in one streamlined flow. I helped integrate Google AMP to reduce AT&T.com's page load times to less than a second on mobile devices. In addition, I perform emergency hotfixes and mentor other AT&T.com developers.`;
  skills: string[] = ['React', 'Next.js', 'Node.js', 'Express', 'Jest', 'Enzyme', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Google AMP', 'Java'];
  duration = 'December 2019 - Present';
  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/att/att3.jpg',
        description: 'Redesign - 2 Column View',
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/att/att5.jpg',
        description: 'Redesign - Offer Tray',
      }
    ),
    new Image(
      3,
      { // modal
        img: './assets/img/att/att6.jpg',
        description: 'Redesign - Carousel',
      }
    ),
    new Image(
      4,
      { // modal
        img: './assets/img/att/att7.jpg',
        description: 'Redesign - Reviews',
      }
    ),
    new Image(
      7,
      { // modal
        img: './assets/img/att/att10.jpg',
        description: 'Redesign - Payment Options'
      }
    ),
    new Image(
      8,
      { // modal
        img: './assets/img/att/att11.jpg',
        description: 'Redesign - Payment Options'
      }
    ),
    new Image(
      9,
      { // modal
        img: './assets/img/att/att12.jpg',
        description: 'Redesign - Store Lookup'
      }
    ),
    new Image(
      10,
      { // modal
        img: './assets/img/att/att13.jpg',
        description: 'Redesign - Price Summary'
      }
    ),
    new Image(
      11,
      { // modal
        img: './assets/img/att/att14.jpg',
        description: 'PDP 3 Column View'
      }
    ),
    new Image(
      13,
      { // modal
        img: './assets/img/att/att16.jpg',
        description: 'PDP Intent Modal'
      }
    ),
    new Image(
      14,
      { // modal
        img: './assets/img/att/att17.jpg',
        description: 'Redesign - Intent Modal'
      }
    ),
    new Image(
      15,
      { // modal
        img: './assets/img/att/att18.jpg',
        description: 'Redesign - Watch Product Details'
      }
    ),
    new Image(
      16,
      { // modal
        img: './assets/img/att/att19.jpg',
        description: 'Redesign - Mobile View'
      }
    )
  ];

  constructor() { }
  ngOnInit() {
  }
}
