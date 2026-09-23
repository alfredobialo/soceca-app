import {Component, inject, signal, VERSION} from '@angular/core';
import {AuthService} from '../shared/services/auth-service';

@Component({
  imports: [],
  template: ``,
})
export class BaseComponent {
  protected readonly title = signal(`Angular v${VERSION.major} starter's kit`);
  protected user = inject(AuthService).getCurrentUser();
}
