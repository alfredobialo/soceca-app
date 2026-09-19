import {Component, input} from '@angular/core';
import {TaskCategory} from '../../services/TaskManagerService';
import {CategoryItem} from './category-item';
import {SkeletonModule} from 'primeng/skeleton';


@Component({
  selector: 'category-list-seleton',
  styles: ``,
  imports:[SkeletonModule],
  template: `
    <div class="grid grid-cols-3 gap-2">
      @for(c of [1,2,3,4,5,6,7,8,2,3,4,5]; track $index){
        <p-skeleton width="90px" height="70px" class="rounded-xl"></p-skeleton>
      }
    </div>

  `,
})
export class CategoryListSkeleton {


}

@Component({
  imports: [
    CategoryItem,
    CategoryListSkeleton
  ],
  selector: 'category-list',
  styles: ``,
  template: `
    @if(loading()){
     <category-list-seleton />
    }
    <div class="grid grid-cols-3 gap-2">
      @for(c of categories(); track c.id){
        <category-item [categoryModel]="c" />
      }
    </div>

  `,
})
export class CategoryList {
  categories = input.required<TaskCategory[]>();
  loading = input<boolean>(false);
}




