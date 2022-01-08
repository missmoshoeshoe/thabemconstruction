import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { QuotationPageComponent } from './pages/quotation-page/quotation-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'services', component: ServicesPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'quotation', component: QuotationPageComponent},
  { path: 'gallery', component: GalleryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
