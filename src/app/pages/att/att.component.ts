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
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

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
