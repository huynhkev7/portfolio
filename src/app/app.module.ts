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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SalesExpressComponent,
    FeaturedComponent,
    AboutComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
