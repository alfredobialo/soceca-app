import { Component , inject, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TaskManagerService} from '../services/TaskManagerService';
import {Notification} from './notification';
import {AuthService} from '../services/auth-service';

@Component({
  imports: [RouterOutlet, RouterLink, Notification],
  selector: 'mobile-view',
  styles: ``,
  template: `
    <div class="rounded-2xl p-0 ring-2 overflow-hidden ring-green-300 h-[590px] w-[324px]  bg-white">
       <div class="p-0">

         <div class="bg-red-700 text-white  px-3  text-xl flex justify-between items-center h-[50px] ">
           <h1 class="">{{ !userData() ? "Login to Continue" :userData()?.name }}</h1>
           <app-notification />
         </div>
         <div class="  h-[468px] overflow-y-auto overflow-x-hidden border-b-stone-400">
           <router-outlet  ></router-outlet>

         </div>
         <div class=" rounded-md flex justify-evenly items-center bg-stone-300 h-[60px]">
           @for(x of [2,3,4,5]; track $index){
             @switch($index){
               @case(0){
                 <a routerLink="home" class="px-3 py-1">Home</a>
               }
               @case(1){
                 <a routerLink="transactions" class="px-3 py-1">Trans</a>
               }
               @case(2){
                 <a routerLink="bookings" class="px-3 py-1">Bookings</a>
               }
               @case(3){
                 <a routerLink="my-task" class="px-3 py-1">My Task</a>
               }
             }

           }

         </div>
       </div>
    </div>

  `,
})
export class MobileView {
  private taskManager = inject(TaskManagerService) ;
  greetings = signal(this.taskManager.sayHello());
  userData = inject(AuthService).getCurrentUser() ;
}
