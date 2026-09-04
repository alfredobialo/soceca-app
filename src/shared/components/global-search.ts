import {Component, signal} from '@angular/core';
import {FormField, form, required, minLength, FormRoot} from '@angular/forms/signals';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'global-search',
  imports: [FormField, FormRoot, ButtonDirective],
  template: `
    <form class="" [formRoot] = searchForm>
      <div
        class=" flex rounded-full ring-2 text-stone-600 ring-stone-400 duration-300 hover:ring-4 focus:ring-4 hover:ring-orange-400 focus:ring-orange-400 px-5 py-2 h-[45px] w-full md:w-[400px] ">
        <span><i class="la la-search la-2x la-flip-horizontal dark:text-white/90"></i></span>
        <input type="search" [formField]="searchForm.searchQuery" class="flex-1 px-1 dark:text-white/90  py-2 text-lg focus:outline-none">
      </div>
      <div class="text-red-400 px-4 mt-2">
        @for ( err of searchForm.searchQuery().errorSummary(); track $index) {
          <p class="mb-1">{{err.message}}</p>
        }
      </div>
    </form>


  `,
  styles: ``,
})
export class GlobalSearch {
  protected searchModel = signal<SearchFormModel>({searchQuery: "Best Phone of 2026"});

  protected searchForm = form(this.searchModel, (path) => {
    required(path.searchQuery, {message :"Search Field is Required"});
    minLength(path.searchQuery, 5, {message : "Minimum length is 5 characters"} );

  }, {
    submission :  {
      action:  async (form) => {
        setTimeout(() => {
          console.log("Form Values" ,form().value());
          alert("Form submitted");
        },3400)

      }
    }
  });

}

export type SearchFormModel = {
  searchQuery: string;
}
