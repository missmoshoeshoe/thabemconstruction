import { Component, OnInit } from '@angular/core';
import { QuotationPageService } from './quotation-page.service';

@Component({
  selector: 'app-quotation-page',
  templateUrl: './quotation-page.component.html',
  styleUrls: ['./quotation-page.component.scss']
})
export class QuotationPageComponent implements OnInit {

  bannerData: any;

  constructor(private myService:  QuotationPageService) { }

  ngOnInit(): void {
    this.myService.getBannerData()
    .subscribe(res => this.bannerData = res);

  }

  submit() {
    
  }

  // onFileSelect(event) {
  //   const file = event.target.files[0];
  // } //Fix for file upload
}
