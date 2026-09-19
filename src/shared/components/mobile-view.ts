import { Component , inject, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TaskManagerService} from '../services/TaskManagerService';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'mobile-view',
  styles: ``,
  template: `
    <div class="rounded-2xl p-1 ring-2 overflow-hidden ring-green-300 h-[590px] w-[324px]  bg-white">
       <div class="p-1">

         <div class="header border-1 text-xl flex justify-center items-center h-[50px] border-b-stone-400">
           <h1 class="">Auderz Mobile</h1>
           <small>{{greetings()}}</small>
         </div>
         <div class="header border-1 h-[468px] overflow-y-auto overflow-x-hidden border-b-stone-400">
           <router-outlet  ></router-outlet>

         </div>
         <div class="header border-1 flex justify-evenly items-center bg-stone-600 h-[60px] border-b-stone-400">
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
}
