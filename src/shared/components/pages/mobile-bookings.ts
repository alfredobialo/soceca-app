import {Component, inject} from '@angular/core';
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
      @if (currentUser(); as user) {
        <p class="mb-2">Change User Profile</p>
        <input #n type="text" class="mb-6"
               pInputText [value]="user.name">
        <button pButton pRipple (click)="updateName(n.value)">Change Profile Name</button>

        <p>{{ user.name }}</p>
      }
    </div>
`,
})
export class MobileBookings {
  private readonly authService = inject(AuthService);
  protected readonly currentUser = this.authService.getCurrentUser();

  updateName(newName: string) {
    this.authService.updateUserName(newName);
  }

}
