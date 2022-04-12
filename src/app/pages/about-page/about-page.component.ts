import { Component, OnInit } from '@angular/core';
import { AboutPageService } from './about-page.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  bannerData: any;

  constructor(private myService:  AboutPageService) { }

  ngOnInit(): void {
    this.myService.getBannerData()
    .subscribe(res => this.bannerData = res);

  }

}
