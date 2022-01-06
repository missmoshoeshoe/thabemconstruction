import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtaCardComponent } from './components/cta-card/cta-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OverviewTextComponent } from './components/overview-text/overview-text.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { ProjectsImageSliderComponent } from './components/projects-image-slider/projects-image-slider.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { QuotationPageComponent } from './pages/quotation-page/quotation-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CtaCardComponent,
    BannerComponent,
    FooterComponent,
    HomePageComponent,
    OverviewTextComponent,
    ServicesHomeComponent,
    ProjectsImageSliderComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    QuotationPageComponent,
    GalleryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
