import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { restApiService } from '../providers/services/restApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  applicationName: string;
  user: string;
  userId: number;
  errorMessage: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private restApi: restApiService,
    private router: Router
  ) { }

  ngOnInit() {
    // var response = this.restApi.configProp[0];
    // this.applicationName = response['appName'];
    // this.userId = Number(JSON.parse(localStorage.getItem('userId')));
    //this.user = this.restApi.username;
    this.errorMessage = '';
    // this.router.navigate(['home/search']);
    this.getUserDetails();
  }

  CamelCase(str) {
    return str.replace(/(?:^|\s)\w/g, match => match.toUpperCase());
  }

  logout() {
    // window.location.href='https://login.microsoftonline.com/18a59a81-eea8-4c30-948a-d8824cdc2580';

    this.restApi.logout().subscribe(res => {
      console.log(res);
      this.restApi.alertService({
        msg: 'logout successfully',
        type: 'alert-error'
      });
    })

    /*
    this.restApi.logout(this.userId).subscribe(
      data => {
        if (data['message'] === 'Logged out in Successfully') {
          this.router.navigate(['/login']);
        }
      },
      err => {
        this.restApi.alertService({
          msg: 'Oops! Something went wrong. Please try again later.',
          type: 'alert-error'
        });
      }
    );
    */
  }

  projectDashboard() {
    this.router.navigate(['home/search']);
  }

  getUserDetails() {
    this.restApi.userDetails().subscribe(res => {
      console.log(res);
      this.restApi.alertService({
        msg: 'Message send successfully',
        type: 'alert-error'
      });
    })
  }


}
