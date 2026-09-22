import {Service, inject, signal} from "@angular/core";
import {AuthService} from './auth-service';


@Service()
export class NotificationService {
  authSvc = inject(AuthService);
  getUserNotificationCount(){
    // connect backend API endpoint
    const count  = signal(0);
    const currentUser = this.authSvc.getCurrentUser();
    setTimeout(() => {
      count.set(4);
    }, 1500);
    return count.asReadonly();
  }
}
