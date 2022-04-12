import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  private _bannerUrl: string = "/assets/data/pages/contact-page/page-banner.json";


  constructor(private http: HttpClient) {}
  getBannerData() {
      return this.http.get(this._bannerUrl);
    }
}
