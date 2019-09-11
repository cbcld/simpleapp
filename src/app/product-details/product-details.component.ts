import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  panelOpenState = false;
  selectedValue: any;

  constructor() { }

  ngOnInit() {
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
