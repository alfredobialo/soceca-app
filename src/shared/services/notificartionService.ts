import {Service, inject, signal} from "@angular/core";
import {AuthService} from './auth-service';


@Service()
export class NotificationService {
  authSvc = inject(AuthService);
  getUserNotificationCount(){
    // connect backend API endpoint
    const count  = signal(0);

    setTimeout(() => {
      const currentUser = this.authSvc.isUserAuthenticated();
      count.set(currentUser ? 4 : 0);
    }, 1500);
    return count.asReadonly();
  }
}
