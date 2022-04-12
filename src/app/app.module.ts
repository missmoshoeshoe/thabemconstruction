import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
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
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { PageBannerComponent } from './components/page-banner/page-banner.component';

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
    GalleryPageComponent,
    TopToolbarComponent,
    SideNavComponent,
    NavigationComponent,
    PageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    NgImageSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
