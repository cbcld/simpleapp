import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, BusinessMetadataRequestObject } from '../interfaces/metadata-details-interface';

@Injectable()
export class MetadataService {

  private metaDataSearchURL = 'http://127.0.0.1:5000/api/v1.0/metadata-management/search';
  private updateAttributeBusinessMetaData = 'http://127.0.0.1:5000/api/v1.0/metadata-management/object/';
  private url: any;

  constructor(private http: HttpClient) {

  }

  public fetchSearhResults(): Observable<any> {
    return this.http.get(this.metaDataSearchURL).pipe(
      map((response: any) => response));
  }

  public fetchFileDetails(objectId: string): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/v1.0/metadata-management/object/' + objectId);
  }

  public searchMetaData(query: string, userId: string): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/v1.0/metadata-management/search?query=' + query).pipe(
      map((response: any) => response));

  }

  public updateBusinessMetadata(objectId: string, requestObj: BusinessMetadataRequestObject, updateAttributeBusinessMetaData: boolean, attributeId?: string): Observable<Response> {
    // tslint:disable-next-line:max-line-length
    if (updateAttributeBusinessMetaData) {
      this.url = this.updateAttributeBusinessMetaData + objectId + '/' + 'attribute' + '/' + attributeId + '/' + 'business-metadata';
    } else {
      this.url = this.updateAttributeBusinessMetaData + objectId + '/' + 'business-metadata';
    }
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url, requestObj, { headers: header }).
      pipe(
        map((response: Response) => response),
        catchError(this.handleError));
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/metadataDetails.json');
  }

  private handleError(error: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return observableThrowError(error.error || 'Server error');
  }

}
