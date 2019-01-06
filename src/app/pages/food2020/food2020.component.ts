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

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

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

  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
  openImageModalColumn(image: Image) {
    console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryColumnConfig
     = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  }
  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    // reset custom plain gallery config
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryRowDescConfig
    = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(-1, true) });
  }
}
