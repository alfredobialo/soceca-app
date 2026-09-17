import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'mobile-home',
  styles: ``,
  template: ` <div class="">
    @for(x of [3,1,2,3,4,5]; track $index){
      <p class="size-36 bg-white mb-8 m-3 rounded p-3 text-red-600">Hello World {{$index + 1}}</p>
    }
  </div>`,
})
export class MobileHome {}
