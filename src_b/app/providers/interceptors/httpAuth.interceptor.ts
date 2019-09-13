import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restApiService } from './../services/restApi.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
    constructor(private restApi: restApiService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add header with currentEmployeeId if available
        let authJwtToken = this.restApi.token;
        if (authJwtToken) {
            request = request.clone({
                setHeaders: {
                    "Authorization": authJwtToken
                }
            });
        }

        return next.handle(request);
    }
}