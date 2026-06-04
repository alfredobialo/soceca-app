import {Component, inject, signal} from '@angular/core';
import {AuthService} from '../shared/services/auth-service';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="h-96 bg-amber-100 rounded-xl p-6 flex justify-center items-center flex-col">
        <h1 class="text-xl text-center">
          <span class="font-bold text-red-500">This is Soceca.</span>
          <br>Coming soon
        </h1>

      <div class="mt-4">
       <span class="font-bold">User Name : {{user().username}}</span>
      </div>
    </div>
  `,
  styles: ``
})
export class App {
  protected readonly title = signal('soceca-app');
  protected user  = inject(AuthService).getUser();
}
