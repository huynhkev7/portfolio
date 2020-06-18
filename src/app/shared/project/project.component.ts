import { Component, OnInit, Input } from '@angular/core';
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

  import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
    @Input() projectName: string;
    @Input() projectType: string;
    @Input() heroUrl: string;
    @Input() projectDescription: string;
    @Input() roleDescription: string;
    @Input() skills: string[];
    @Input() duration: string;
    @Input() images: Image[];
    @Input() protect: boolean;

    otherProjects: any[] = [];

    numberProjects = 7;

    slides = [
      {img: "http://placehold.it/350x150/000000"},
      {img: "http://placehold.it/350x150/111111"},
      {img: "http://placehold.it/350x150/333333"},
      {img: "http://placehold.it/350x150/666666"}
    ];
    slideConfig = {
      'arrows': false,
      'dots': true,
    };

    trim(text: string) {
      return this.projectService.shortenText(text);
    }

    addSlide() {
      this.slides.push({img: "http://placehold.it/350x150/777777"})
    }

    removeSlide() {
      this.slides.length = this.slides.length - 1;
    }

    slickInit(e) {
      console.log('slick initialized');
    }

    breakpoint(e) {
      console.log('breakpoint');
    }

    afterChange(e) {
      console.log('afterChange');
    }

    beforeChange(e) {
      console.log('beforeChange');
    }

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  constructor(private projectService: ProjectService, private router: Router) {
    
  }

  ngOnInit() {
    this.otherProjects = this.projectService.getOtherProjects(this.router.url);
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
