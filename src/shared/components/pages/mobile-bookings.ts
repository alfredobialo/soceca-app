import {Component, inject, signal} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {AuthService} from '../../services/auth-service';

@Component({
  imports: [InputTextModule, ButtonModule, RippleModule],
  selector: 'mobile-bookings',
  styles: ``,
  template: `
    <div class="p-3">
      <p class="mb-2">Change User Profile</p>
      <input #n type="text" class="mb-6"
             pInputText  [value]="updatedName().name" >
      <button pButton pRipple (click)="updateName(n.value)">Change Profile Name</button>

      <p>{{updatedName().name}}</p>

    </div>
`,
})
export class MobileBookings {
  //[(ngModel)]="name"
  authService: AuthService  = inject(AuthService);
  updatedName =  this.authService.getCurrentUser();

  updateName(newName: string) {
    this.authService.updateUserName(newName);
  }

}

