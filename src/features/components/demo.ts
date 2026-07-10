import {Component} from '@angular/core';
import {ChangeBackgroundColor} from '../../shared/directives/ChangeBackgroundColor';

@Component({
  selector: 'app-demo',
  imports: [
    ChangeBackgroundColor
  ],
  template: `
    <div ngSkipHydration asomBgColor="orange" class="p-10 text-2xl min-h-[100px] w-[500px]">
      demo works!
      <p ngNonBindable>
        I want to you teach Binding in angular using ' {{ }} ' example : {{3 + 4}} = 7
      </p>
      <!-- Here-->
      <ng-template >

      </ng-template>
    </div>

    <ng-container >
      This a Secret content  Hello
    </ng-container>
  `,
  styles: ``,
})
export class Demo {
}
