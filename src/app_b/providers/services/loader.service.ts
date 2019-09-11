import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class loaderService {
    public isLoading = new BehaviorSubject(false);

    start() {
        window.setTimeout(() => {
            this.isLoading.next(true);
        }, 0);
    }

    stop() {
        window.setTimeout(() => {
            this.isLoading.next(false);
        }, 0);
    }
}