import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes} from '@angular/router';
import {MobileTasks} from '../shared/components/pages/mobile-tasks';
import {MobileView} from '../shared/components/mobile-view';
import {mobileRoutes} from '../shared/components/mobile-routes';
import {Dashboard} from './shell/dashboard';
import {Login} from '../shared/auth/login';
import {authGuard} from '../shared/services/auth-service';
export const dashboardRoutes: Routes = [
  {
    path: '',
    component: MobileView,
    children: mobileRoutes
  }
];
export const appRoutes : Routes = [
  {
    path : "",
    component: Dashboard,
    children: dashboardRoutes,
    canActivate: [authGuard],
  },
  {
    path : "login",
    component: Login,

  }
];


