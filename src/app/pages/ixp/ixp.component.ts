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
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

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
