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
  selector: 'app-g2l',
  templateUrl: './g2l.component.html',
  styleUrls: ['./g2l.component.scss']
})
export class G2lComponent implements OnInit {
  projectName = 'Global to Local';
  projectType = 'Website Redesign';
  heroUrl = './assets/img/g2l/g2l-banner-com.jpg';
  projectDescription = `Global to Local (G2L) is a non-profit organization that offers health services and programs to community members. Upon identifying gaps with information accessbility, we embarked on a user-centered design process to deliver a website the resonates with end users.`;
  roleDescription = `In a team of two, I worked as the UX designer and UI developer. I helped conduct user interviews, user testing, and developed high-fidelity prototypes.`;
  skills: string[] = ['Axure', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'SquareSpace'];
  duration = 'June 2015 - June 2016';

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/g2l/g2l.jpg',
        description: 'Website wireframe'
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/g2l/rubric.jpg',
        description: 'Heuristic evaluation findings'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/g2l/g2l-banner-com.jpg',
        description: 'Finalized website design'
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
