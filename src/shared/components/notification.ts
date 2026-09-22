import { Component, inject } from '@angular/core';
import {NotificationService} from '../services/notificartionService';

@Component({
  imports: [],
  selector: 'app-notification',
  styles: ``,
  template: `
    <div class="size-[40px] relative flex justify-center items-center rounded-full bg-gray-200" [class.bg-transparent]="notificationCount() <=0 ">
      @if(notificationCount() >0){
        <span class="absolute right-[5px] top-[-2px] text-red-600 text-[14px]">{{notificationCount()}}</span>

      }
      <i [class.text-red-700]="notificationCount() >0"
         [class.text-gray-200]="notificationCount() <= 0"
         class="scale-115 las la-bell"></i>
    </div>

  `,
})
export class Notification {
  notificationCount = inject(NotificationService).getUserNotificationCount();
}
