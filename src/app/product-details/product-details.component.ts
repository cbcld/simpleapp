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
  cmtName: any;
  comments: any[] = [];
  cmtAdded: boolean = false;
  commentsAdded: any[] = [];
  constructor(private router: Router, private restApi: restApiService) {

  }

  ngOnInit() {
    this.loadComment();
  }

  loadComment() {
    this.restApi.getComments().subscribe(res => {
      res['comments'].forEach(comment => {
        this.comments.push(comment);
      });
    });
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


  addComment() {
    this.cmtAdded = true;
    if (this.cmtName != '') {
      //let obj = {
      //  user: "admin",
      ////product: "LC3",
      // date: "17/09/2019",
      ////  comment: this.cmtName
      //  }
      this.commentsAdded.push(this.cmtName);
      console.log(this.commentsAdded);
      this.cmtName = "";
    }

    // var post_cmt = function ($home) {
    // this.comments.splice($home, 1);
    //}
  }






}
