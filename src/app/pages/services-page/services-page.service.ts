import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {

  private _bannerUrl: string = "/assets/data/pages/services-page/page-banner.json";


  constructor(private http: HttpClient) {}
  getBannerData() {
      return this.http.get(this._bannerUrl);
    }
}
