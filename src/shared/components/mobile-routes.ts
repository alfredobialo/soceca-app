import {Route } from "@angular/router";
import {MobileHome} from './pages/mobile-home';
import {MobileTransactions} from './pages/mobile-transactions';
import {MobileBookings} from './pages/mobile-bookings';
import {MobileTasks} from './pages/mobile-tasks';

export const mobileRoutes: Route[] = [
  {
    path: 'home',
    component: MobileHome,
    title : "Auderz Home",
  },
  {
    path: '',
    component: MobileHome,
    title : "Auderz Home",
  },
  {
    path: 'transactions',
    component : MobileTransactions,
    title : "Auderz Transactions",
  },
  {
    path: 'bookings',
    component : MobileBookings,
    title : "Auderz Bookings",
  },
  {
    path: "my-task",
    component : MobileTasks,
    title : "Auderz Tasks",

  }
];
