import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { restApiService } from '../providers/services/restApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-dasboard',
  templateUrl: './search-dasboard.component.html',
  styleUrls: ['./search-dasboard.component.scss']
})
export class SearchDasboardComponent implements OnInit {
  search: string;
  form: FormGroup;
  isHidden: boolean;

  showSpinner: boolean;

  constructor(
    private restApi: restApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.showSpinner = false;

  }

  openDataProduct() {
    this.router.navigate(['home/dataProduct']);
  }


}
