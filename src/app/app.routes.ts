import { Routes } from '@angular/router';
import {MobileTasks} from '../shared/components/pages/mobile-tasks';
import {MobileView} from '../shared/components/mobile-view';
import {mobileRoutes} from '../shared/components/mobile-routes';

export const routes: Routes = [
  {
    path: '',
    component: MobileView,
    children: mobileRoutes
  }
];
