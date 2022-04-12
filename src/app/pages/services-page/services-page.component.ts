import { Component, OnInit } from '@angular/core';
import { ServicesPageService } from './services-page.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  bannerData: any;

  constructor(private myService:  ServicesPageService) { }

  ngOnInit(): void {
    this.myService.getBannerData()
    .subscribe(res => this.bannerData = res);

  }

}
