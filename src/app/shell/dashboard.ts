import { Component } from '@angular/core';
import {GlobalSearch} from '../../shared/components/global-search';
import {RouterOutlet} from '@angular/router';
import {BaseComponent} from "../base-component";
@Component({
  imports: [
    GlobalSearch,
    RouterOutlet
  ],
  selector: 'dashboard',
  styles: ``,
  template: `
    <div class="flex text-shadow-stone-800">
      <div class="w-[80px] lg:w-[100px] dark:bg-black/70 bg-white flex flex-col  items-center
        z-10 sticky bottom-0 top-0 left-0 min-h-screen shadow-md py-2 px-2 lg:px-4">
        <div class="flex justify-between h-[50px] ">
          <div class="flex justify-between size-[50px] dark:bg-stone-200 bg-white shadow rounded-full">
            <i class="la la-bus la-3x text-orange-400"></i>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="h-[200px] dark:bg-stone-600 bg-white  p-6 flex justify-center items-center flex-col">
          <h1 class="text-xl text-center">
            @if(user()){
              <span class="font-bold dark:text-stone-300 text-stone-600 text-2xl">Welcome {{user()?.name}} to {{ title() }}.</span>
            }
            @else{
              <span class="font-bold dark:text-stone-300 text-stone-600 text-2xl">Please Login</span>

            }
          </h1>

          <div class="mt-4">
            <global-search />
          </div>

        </div>
        <div class="mt-[200px]">
          <div class="mt-5 h-100 p-4 flex justify-center items-center ">
            <router-outlet />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Dashboard extends BaseComponent {}
