import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BaseService } from './baseService';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private notification: NzNotificationService) { }
  public createNotification(code: string, message: string): void {
    if (code == BaseService.SUCCESS) {
      status = 'success';
    } else if (code == BaseService.FAIL) {
      status = 'error';
    }
    this.notification.create(
      status,
      'Notification Title',
      message
    );
  }
}
