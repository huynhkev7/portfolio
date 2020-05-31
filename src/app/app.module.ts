import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SalesExpressComponent } from './pages/sales-express/sales-express.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { AboutComponent } from './pages/home/about/about.component';
import { PhotographyComponent } from './pages/home/photography/photography.component';
// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { Food2020Component } from './pages/food2020/food2020.component';
import { G2lComponent } from './pages/g2l/g2l.component';
import { BentogetherComponent } from './pages/bentogether/bentogether.component';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';
import { ResumeComponent } from './pages/resume/resume.component';
import { AttComponent } from './pages/att/att.component';
import { IxpComponent } from './pages/ixp/ixp.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { CardComponent } from './shared/card/card.component';
import { ProjectComponent } from './shared/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SalesExpressComponent,
    FeaturedComponent,
    AboutComponent,
    PhotographyComponent,
    Food2020Component,
    G2lComponent,
    BentogetherComponent,
    ResumeComponent,
    AttComponent,
    IxpComponent,
    StarshipComponent,
    CardComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule.forRoot(),
    NgxSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
