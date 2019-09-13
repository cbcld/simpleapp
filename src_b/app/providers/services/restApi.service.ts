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

  getImportJsonData(data) {
    let params = new HttpParams();
    params = params.append('data', data);
    return this.http.get(
      `${API_URL.base_url}${API_URL.api_prefix}/importMetadata`,
      { params: params }
    );
  }

  getUserJobCount(userId) {
    return this.http.get(
      `${API_URL.base_url}${API_URL.api_prefix}/jobsCount/user/${userId}`
    );
  }

  getUserProjectCount(userId) {
    return this.http.get(
      `${API_URL.base_url}${API_URL.api_prefix}/projectsCount/user/${userId}`
    );
  }

  login(username, password) {
    let data = {
      userName: username,
      password: password
    };
    return this.http.post(`${API_URL.base_url}/login`, data);
  }

  setConfigProperties(data) {
    this.configProp = data;
  }

  setUserData(userdata) {
    this.userId = userdata['userDetails']['userId'];
    this.token = userdata['token'];
    this.username = userdata['userDetails']['userName'];
  }

  logout(user) {
    return this.http.get(`${API_URL.base_url}/logout?userid=${user}`);
  }

  getJobData(params) {
    if (params['projectId'] == -1) {
      return this.http.get(API_URL.base_url + API_URL.api_prefix + '/jobs/user/' + params.userId);
    } else {
      return this.http.get(API_URL.base_url + API_URL.api_prefix + '/jobs/project/' + params.projectId + '/user/' + params.userId);
    }
  }

  createJob(data) {
    return this.http.get('assets/data/viewConfig.json');
  }

  /** Create Project Services Starts */

  testDBConnection(data) {
    return this.http.post(
      `${API_URL.base_url}${API_URL.api_prefix}/checkConnection`,
      data
    );
  }

  saveProject(data) {
    return this.http.post(
      `${API_URL.base_url}${API_URL.api_prefix}/saveProject`,
      data
    );
  }

  getConnectionNames(data) {
    return this.http.get(
      `${API_URL.base_url}${API_URL.api_prefix}/connections/project/` + data
    );
  }

  saveIngestionProject(data) {
    return this.http.post(
      `${API_URL.base_url}${API_URL.api_prefix}/saveIngestionConfig`,
      data
    );
  }

  saveMetadataProject(data) {
    return this.http.post(
      `${API_URL.base_url}${API_URL.api_prefix}/saveMetadataConfig`,
      data
    );
  }

  saveProcesingProject(data) {
    return this.http.post(
      `${API_URL.base_url}${API_URL.api_prefix}/saveProcessConfig`,
      data
    );
  }

  /** Create Project Services Ends */

  getUserProjects(userId) {
    return this.http.get(
      `${API_URL.base_url}${API_URL.api_prefix}/projects/user/${userId}`
    );
  }

  getOperations() {
    return this.http.get('assets/data/operations.json');
  }
}
