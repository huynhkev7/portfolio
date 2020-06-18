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
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  projectName = 'Starship';
  projectType = 'Internal Sales Tool';
  heroUrl = './assets/img/starship/starship-1.jpg';
  projectDescription = `Dashboard application providing a convenient user view of consolidated portals to AT&T microservices. In addition, Starship provides rapid onboarding and permission based framework across internal AT&T microservice applications.`;
  roleDescription = `As a full-stack engineer for Starship, I worked across five microservices to establish high availability and load balance in order to improve platform resilience. In addition, I upgraded application security by integrating security scanning and resolved a multitude of front-end production defects.`;
  skills: string[] = ['Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Spring', 'Kubernetes', 'Docker', 'Oracle SQL'];
  duration = 'November 2018 - March 2019';
  protect = true;

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/starship/starship-1.jpg',
        description: 'Dashboard page',
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/starship/starship-2.jpg',
        description: 'Order handoff page'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/starship/starship-3.jpg',
        description: 'Reports page',
      }
    ),
  ];
  constructor() { }
  ngOnInit() {
  }
}
