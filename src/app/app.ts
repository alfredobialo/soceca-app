import {afterNextRender, Component, ElementRef, inject, Renderer2, signal, VERSION} from '@angular/core';
import {AuthService} from '../shared/services/auth-service';
import {GlobalSearch} from '../shared/components/global-search';
import {ButtonDirective} from 'primeng/button';
import {MainApp} from '../assignment2';

@Component({
  selector: 'app-root',
  imports: [GlobalSearch, ButtonDirective, MainApp],
  template: `
    <div class="w-[80px] lg:w-[100px] bg-white flex flex-col  items-center
        z-10 fixed bottom-0 top-0 left-0 shadow-md py-2 px-2 lg:px-4">
      <div class="flex justify-between h-[50px] ">
        <div class="flex justify-between size-[50px] bg-white shadow rounded-full">
            <i class="la la-bus la-3x text-orange-400"></i>
        </div>
      </div>
    </div>
    <div class="min-h-full bg-stone-200 rounded-xl p-6 flex justify-center items-center flex-col">
        <h1 class="text-xl text-center capitalize">
          <span class="font-bold text-red-500">This is {{ title() }}.</span>
          <br>Coming soon this Fall  :
        </h1>
        <div class="text-xl  text-blue-600">
          {{ngVersion()}}
        </div>
      <div class="mt-4">
        <global-search />
      </div>

      <div class="mt-4">
        <button pButton [raised]="true" size="large" class="!px-8 !py-2 ">Post Transaction</button>
      </div>

      <div class="">
        <MainApp />
      </div>



    </div>
  `,
  styles: ``
})
export class App {
  protected readonly title = signal('soceca');
  protected user  = inject(AuthService).getUser();
  #elemRef  = inject(ElementRef);
  #renderer2 = inject(Renderer2);
  protected ngVersion    = signal<string>(`${VERSION.full}+${this.title()}`);
  myArr = signal([2,4,6,8,10]);
  constructor() {
    afterNextRender( () => {

      console.log("Angular is Done Rendering", this.#elemRef.nativeElement);
      this.#renderer2.setAttribute(this.#elemRef.nativeElement, 'ng-version', this.ngVersion());
      this.#renderer2.setAttribute(this.#elemRef.nativeElement, 'built-by', `Asom Services Inc`);
      this.#renderer2.setAttribute(this.#elemRef.nativeElement, 'supported-by', `Alvana Iwuh`);
      // remove the ng version
      //this.#renderer2.removeAttribute(this.#elemRef.nativeElement, "ng-version");
    });
  }
}
