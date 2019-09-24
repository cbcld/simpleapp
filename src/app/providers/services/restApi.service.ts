import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { API_URL } from './../constants/url.constant';
import { ConfigData } from '../../config-data.model';
import { Injectable } from '@angular/core';
import { NotificationService } from './../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class restApiService {
  public jsonData: any;
  configList: ConfigData[];
  data: any;
  importData: any;
  configProp: any;
  username: string;
  token: string;
  userId: any;
  projectId: any;
  connectionArray: any;
  connectionId: any;
  connectionNames: any;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  alertService(data) {
    this.notificationService.notify(data);
  }

  getConfigData() {
    return this.http.get('/assets/data/config.json');
  }

  getComments() {
    return this.http.get('/assets/data/comment.json');
  }

  sendMail() {
    return this.http.get('http://127.0.0.1:3200/api/sendmail');
  }

  getProductData(productName) {
    return this.http.get('http://127.0.0.1:3200/api/dataProduct/' + productName);
  }

  logout() {
    return this.http.get('/api/logout');
  }

  userDetails() {
    return this.http.get('/api/useridEndpoint');
  }




  /**
   getImportJsonData(data) {
     let params = new HttpParams();
     params = params.append('data', data);
     return this.http.get(
       `${API_URL.base_url}${API_URL.api_prefix}/importMetadata`,
       { params: params }
     );
   }
   */

}
