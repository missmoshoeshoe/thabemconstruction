import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-image-slider',
  templateUrl: './projects-image-slider.component.html',
  styleUrls: ['./projects-image-slider.component.scss']
})
export class ProjectsImageSliderComponent implements OnInit {

  imageObject: Array<object> = [{
    image: '/assets/images/gallery/gallery33.jpg',
    thumbImage: '/assets/images/gallery/gallery33.jpg',
    alt: 'alt of image'
  }, {
    image: '/assets/images/gallery/gallery32.jpg',
    thumbImage: '/assets/images/gallery/gallery32.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery31.jpg',
    thumbImage: '/assets/images/gallery/gallery31.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery30.jpg',
    thumbImage: '/assets/images/gallery/gallery30.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery29.jpg',
    thumbImage: '/assets/images/gallery/gallery29.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery28.jpg',
    thumbImage: '/assets/images/gallery/gallery28.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery27.jpg',
    thumbImage: '/assets/images/gallery/gallery27.jpg',
    alt: 'Image alt'
  }, {
    image: '/assets/images/gallery/gallery26.jpg',
    thumbImage: '/assets/images/gallery/gallery26.jpg',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery25.jpg',
    thumbImage: '/assets/images/gallery/gallery25.jpg',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery24.jpg',
    thumbImage: '/assets/images/gallery/gallery24.jpg',
    alt: 'Image alt'
  },{
    image: '/assets/images/gallery/gallery23.jpg',
    thumbImage: '/assets/images/gallery/gallery23.jpg',
    alt: 'Image alt'
  },
  {
    image: '/assets/images/gallery/gallery22.jpg',
    thumbImage: '/assets/images/gallery/gallery22.jpg',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
