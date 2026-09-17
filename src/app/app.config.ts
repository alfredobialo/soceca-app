import {APP_ID, ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {providePrimeNG} from 'primeng/config';
import Aura from "@primeuix/themes/aura";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide : APP_ID, useValue: 'soc' },
    providePrimeNG({
      theme : {
        preset : Aura,
        options : {
          darkModeSelector : "system"
        }
      },
      ripple : true,
      license : "eyJpZCI6ImM2Yzk3ZGMwLTcyYmQtNDUwYi05MDA2LTIzNzJjMTFmNDQ0ZSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQxMzM0MTgsImV4cCI6MTgxNTY2OTQxOH0.8nQqoTnGqRjO2Y5FVXH11_k0N22TS14e7GxX_kvI6t2rpBhrw3LYzu0SxY5542XBj8u0-Z9j7q_tdRaJ6nZLBw"
    })
  ]
};
