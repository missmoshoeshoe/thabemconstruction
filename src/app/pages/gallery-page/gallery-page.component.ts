import { Component, OnInit } from '@angular/core';
import { GalleryPageService } from './gallery-page.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  bannerData: any;

  constructor(private myService:  GalleryPageService) { }

  ngOnInit(): void {
    this.myService.getBannerData()
    .subscribe(res => this.bannerData = res);

  }

}
