import { Component, OnInit } from '@angular/core';
import { ContactPageService } from './contact-page.service'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  bannerData: any;

  constructor(private myService:  ContactPageService) { }

  ngOnInit(): void {
    this.myService.getBannerData()
    .subscribe(res => this.bannerData = res);

  }

}
