import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { loaderService } from './../services/loader.service';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {

    private inProgressCount = 0;

    constructor(private loaderService: loaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.inProgressCount++;
        this.loaderService.start();
        return next.handle(req).pipe(finalize(() => {
            this.inProgressCount--;
            if (this.inProgressCount === 0) {
                this.loaderService.stop();
            }
        }));
    }
}