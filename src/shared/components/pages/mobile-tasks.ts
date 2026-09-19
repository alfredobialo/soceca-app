import {Component, computed, inject, signal, untracked} from '@angular/core';
import {CategoryItem} from '../task/category-item';
import {TaskCategory, TaskManagerService} from '../../services/TaskManagerService';
import {CategoryList} from '../task/category-list';

@Component({
  imports: [
    CategoryItem,
    CategoryList
  ],
  selector: 'mobile-tasks',
  styles: ``,
  template: `
  <div class="p-3">
    <category-item [categoryModel]="catItem()"   />
    <category-list [categories]="cats()"  [loading]="loading()" />

  </div>`,
})
export class MobileTasks {
  catItem  = signal<TaskCategory>({
    color  : "text-red-600",
    name : "Cat Fish",
    icon :"las la-trash",
    id :"000001"
  });
  taskSvc = inject(TaskManagerService);
  cats = this.taskSvc.getTaskCategory();
  loading  = computed(() => {
    return this.cats().length === 0;
  });

  constructor() {

  }
}
