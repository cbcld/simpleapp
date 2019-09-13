import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { restApiService } from '../providers/services/restApi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: string;
  password: string;
  showSpinner: boolean;

  constructor(
    private restApi: restApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.showSpinner = false;
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.showSpinner = true;
    this.router.navigate(['home/search']);

    /*  if (this.form.valid) {
        this.restApi
          .login(this.form.value.username, this.form.value.password)
          .subscribe(
            res => {
              this.showSpinner = false;
              if (res['message'] == 'Logged in successfully') {
                this.restApi.getConfigData().subscribe(configRes => {
                  this.restApi.setConfigProperties(configRes);
                  this.restApi.setUserData(res);
                  localStorage.setItem(
                    'userName',
                    JSON.stringify(res['userDetails']['userName'])
                  );
                  localStorage.setItem(
                    'userId',
                    JSON.stringify(res['userDetails']['userId'])
                  );
                  this.router.navigate(['home/dashboard']);
                });
              }
            },
            err => {
              this.showSpinner = false;
              this.restApi.alertService({
                msg: err.error['message'],
                type: 'alert-error'
              });
            }
          );
      } else {
        this.showSpinner = false;
        const error = 'Please enter Username & Password';
        this.restApi.alertService({
          msg: error,
          type: 'alert-error'
        });
      }*/
  }


}
