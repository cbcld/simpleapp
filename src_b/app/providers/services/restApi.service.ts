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
