import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  selector: 'app-bentogether',
  templateUrl: './bentogether.component.html',
  styleUrls: ['./bentogether.component.scss']
})
export class BentogetherComponent implements OnInit {
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: './assets/img/bentogether/build.jpg',
        description: 'Meal creation'
      }
    ),
    new Image(
      1,
      { // modal
        img: './assets/img/bentogether/stats.jpg',
        description: 'Meal nutrition'
      }
    ),
    new Image(
      2,
      { // modal
        img: './assets/img/bentogether/download.jpg',
        description: 'Project board'
      }
    ),
    new Image(
      3,
      { // modal
        img: './assets/img/bentogether/custom.jpg',
        description: 'Pet customization',
      }
    ),
    new Image(
      4,
      { // modal
        img: './assets/img/bentogether/pet.jpg',
        description: 'Pet selection'
      }
    ),
    new Image(
      5,
      { // modal
        img: './assets/img/bentogether/bento.jpg',
        description: 'Digital bento box design'
      }
    ),
    new Image(
      6,
      { // modal
        img: './assets/img/bentogether/prototype_1.jpg',
        description: 'First iteration of physical bento box with Arduino'
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

  constructor(private spinner: NgxSpinnerService) { }

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
