import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { restApiService } from '../providers/services/restApi.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  panelOpenState = false;
  selectedValue: any;

  constructor(private router: Router, private restApi: restApiService) {

  }

  ngOnInit() {
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  dataProductScreen() {
    this.router.navigate(['home/dataProduct']);
  }

  openEDC() {
    this.restApi.getConfigData().subscribe(res => {
      window.open(res[0]['EDCUrl'], "_blank");
    });
  }

  openAxon() {
    this.restApi.getConfigData().subscribe(res => {
      window.open(res[0]['AxonUrl'], "_blank");
    });
  }





}
