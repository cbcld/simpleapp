import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationComponent } from './../shared-components/notification/notification.component';

@Injectable()
export class NotificationService {
    durationInSeconds = 5;

    constructor(
        private snackBar: MatSnackBar) { }

    notify(notification) {
        setTimeout(() => {
            this.snackBar.openFromComponent(NotificationComponent, {
                duration: this.durationInSeconds * 1000,
                data: notification.msg,
                panelClass: notification.type
            });
        }, 0);
    }

}