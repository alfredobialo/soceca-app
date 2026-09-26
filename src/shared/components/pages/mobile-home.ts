import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'mobile-home',
  styles: ``,
  template: ` <div class="">
    @for(x of [3,1,2,3,4,5]; track $index){
      <p class="flex justify-center items-center size-36 duration-300
        hover:bg-primary-50 bg-gray-100
        hover:ring-primary-400
        hover:ring-2
        hover:text-primary-800
        hover:font-bold
        cursor-pointer
        hover:scale-105
       mb-8 m-3 rounded-lg p-3 text-red-600">
        Hello World {{$index + 1}}
      </p>
    }
  </div>`,
})
export class MobileHome {}
