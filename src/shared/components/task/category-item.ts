import { Component, input } from '@angular/core';
import {TaskCategory} from '../../services/TaskManagerService';

@Component({
  imports: [],
  selector: 'category-item',
  styles: ``,
  template: `
    @let cat = categoryModel();
    @let classes = "la-2x" + " " + cat.color +  " " + cat.icon;
    <button class="rounded-2xl p-4 flex justify-center items-center flex-col
    h-[70px] w-[90px] hover:shadow-2xl hover:scale-95 ring-1 dark:ring-surface-400 cursor-pointer duration-300 dark:accent-surface-500 dark:hover:bg-surface-400">
      <span><i  [class]="classes" ></i></span>
      <p class="text-[0.67rem]  text-nowrap  text-ellipsis">{{cat.name}}</p>
  </button>`,
})
export class CategoryItem {

  categoryModel  = input.required<TaskCategory>();
}
