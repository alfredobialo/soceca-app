import {
  ChangeDetectionStrategy,
  Component, computed, inject,
  signal
} from '@angular/core';

import {
  email,
  form,
  FormField,
  minLength,
  required
} from '@angular/forms/signals';
import {AuthService} from '../services/auth-service';
import {Router} from '@angular/router';

interface LoginModel {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormField],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
    <div
      class="relative flex min-h-screen items-center justify-center overflow-hidden
             bg-linear-to-br from-indigo-50 via-slate-50 to-violet-100
             px-4 py-8 sm:px-6">

      <!-- Animated Background -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">

        <!-- Orb 1 -->
        <div
          class="absolute -right-32 -top-32 h-96 w-96 rounded-full
                 bg-indigo-500/30 blur-3xl
                 animate-[float_8s_ease-in-out_infinite]">
        </div>

        <!-- Orb 2 -->
        <div
          class="absolute -bottom-32 -left-32 h-80 w-80 rounded-full
                 bg-violet-500/25 blur-3xl
                 animate-[float_10s_ease-in-out_infinite_2s]">
        </div>

        <!-- Orb 3 -->
        <div
          class="absolute left-[15%] top-[35%] h-48 w-48 rounded-full
                 bg-purple-400/15 blur-3xl
                 animate-[float_12s_ease-in-out_infinite_4s]">
        </div>

      </div>


      <!-- Login Card -->
      <div
        class="relative z-10 w-full max-w-md
               animate-[cardEnter_.6s_cubic-bezier(.16,1,.3,1)]
               rounded-3xl border border-white/70
               bg-white/95 p-6 shadow-2xl shadow-slate-900/10
               backdrop-blur-xl
               sm:p-10">


        <!-- Logo -->
        <div
          class="mx-auto mb-5 flex h-14 w-14 items-center justify-center
                 rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600
                 text-xl text-white shadow-lg shadow-indigo-500/30
                 animate-[logoEnter_.7s_cubic-bezier(.16,1,.3,1)]">

          ◆

        </div>


        <!-- Header -->
        <div class="mb-8 text-center">

          <h1
            class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">

            Welcome back

          </h1>

          <p class="mt-2 text-sm text-slate-500">

            Sign in to continue to your account

          </p>

        </div>


        <!-- Server Error -->
        @if (loginError()) {

          <div
            role="alert"
            class="mb-5 flex items-center gap-3 rounded-xl border
                   border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700
                   animate-[errorEnter_.3s_ease-out]">

            <span
              class="flex h-5 w-5 shrink-0 items-center justify-center
                     rounded-full bg-red-600 text-xs font-bold text-white">

              !

            </span>

            <span>
              {{ loginError() }}
            </span>

          </div>

        }


        <!-- Form -->
        <form
          novalidate
          (submit)="login(); $event.preventDefault()">


          <!-- Email -->
          <div class="mb-5">

            <label
              for="email"
              class="mb-2 block text-sm font-semibold text-slate-700">

              Email address

            </label>


            <div
              class="flex h-13 items-center rounded-xl border bg-white
                     transition-all duration-200
                     focus-within:-translate-y-px
                     focus-within:border-indigo-500
                     focus-within:ring-4
                     focus-within:ring-indigo-500/10"
              [class.border-slate-300]="
                !(
                  loginForm.email().touched() &&
                  loginForm.email().invalid()
                )
              "
              [class.border-red-500]="
                loginForm.email().touched() &&
                loginForm.email().invalid()
              "
              [class.animate-[shake_.3s_ease]]="
                loginForm.email().touched() &&
                loginForm.email().invalid()
              ">


              <!-- Email Icon -->
              <div class="flex w-12 justify-center text-slate-400">

                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">

                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"/>

                  <path d="m3 7 9 6 9-6"/>

                </svg>

              </div>


              <input
                id="email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                [formField]="loginForm.email"
                class="h-full min-w-0 flex-1 bg-transparent px-2
                       text-sm text-slate-900 outline-none
                       placeholder:text-slate-400" />

            </div>


            <!-- Email Validation -->
            @if (
              loginForm.email().touched() &&
              loginForm.email().invalid()
            ) {

              <div
                class="mt-1.5 text-xs font-medium text-red-600
                       animate-[errorEnter_.25s_ease-out]">

                Please enter a valid email address.

              </div>

            }

          </div>


          <!-- Password -->
          <div class="mb-5">

            <div class="mb-2 flex items-center justify-between">

              <label
                for="password"
                class="block text-sm font-semibold text-slate-700">

                Password

              </label>

              <a
                href="/forgot-password"
                class="text-xs font-medium text-indigo-600
                       transition-colors hover:text-indigo-800
                       hover:underline">

                Forgot password?

              </a>

            </div>


            <div
              class="flex h-13 items-center rounded-xl border bg-white
                     transition-all duration-200
                     focus-within:-translate-y-px
                     focus-within:border-indigo-500
                     focus-within:ring-4
                     focus-within:ring-indigo-500/10"
              [class.border-slate-300]="
                !(
                  loginForm.password().touched() &&
                  loginForm.password().invalid()
                )
              "
              [class.border-red-500]="
                loginForm.password().touched() &&
                loginForm.password().invalid()
              "
              [class.animate-[shake_.3s_ease]]="
                loginForm.password().touched() &&
                loginForm.password().invalid()
              ">


              <!-- Password Icon -->
              <div class="flex w-12 justify-center text-slate-400">

                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">

                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2"/>

                  <path d="M8 10V7a4 4 0 0 1 8 0v3"/>

                </svg>

              </div>


              <input
                id="password"
                [type]="showPassword() ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Enter your password"
                [formField]="loginForm.password"
                class="h-full min-w-0 flex-1 bg-transparent px-2
                       text-sm text-slate-900 outline-none
                       placeholder:text-slate-400" />


              <!-- Show / Hide -->
              <button
                type="button"
                (click)="togglePassword()"
                class="mr-2 rounded-lg px-2 py-1.5 text-xs
                       font-semibold text-indigo-600
                       transition-colors hover:bg-indigo-50">

                @if (showPassword()) {
                  Hide
                } @else {
                  Show
                }

              </button>

            </div>


            <!-- Password Validation -->
            @if (
              loginForm.password().touched() &&
              loginForm.password().invalid()
            ) {

              <div
                class="mt-1.5 text-xs font-medium text-red-600
                       animate-[errorEnter_.25s_ease-out]">

                Password must contain at least 8 characters.

              </div>

            }

          </div>


          <!-- Remember Me -->
          <label
            class="mb-6 flex cursor-pointer items-center gap-2.5
                   text-sm text-slate-600">

            <input
              type="checkbox"
              [formField]="loginForm.rememberMe"
              class="h-4 w-4 cursor-pointer rounded border-slate-300
                     text-indigo-600 accent-indigo-600
                     focus:ring-indigo-500" />

            <span>
              Remember me
            </span>

          </label>


          <!-- Login Button -->
          <button
            type="submit"
            [disabled]="isLoading()"
            class="flex h-13 w-full items-center justify-center gap-3
                   rounded-xl bg-linear-to-r from-indigo-600 to-violet-600
                   text-sm font-semibold text-white
                   shadow-lg shadow-indigo-500/25
                   transition-all duration-200
                   hover:-translate-y-0.5
                   hover:shadow-xl hover:shadow-indigo-500/30
                   active:translate-y-0
                   disabled:cursor-not-allowed
                   disabled:opacity-70"
                   disabled:from-gray-200 disabled:to-gray-400
          >


            @if (isLoading()) {

              <span
                class="h-5 w-5 animate-spin rounded-full border-2
                       border-white/30 border-t-white">
              </span>

              <span>
                Signing in...
              </span>

            } @else {

              <span>
                Sign in
              </span>

              <span
                class="text-xl transition-transform duration-200
                       group-hover:translate-x-1">

                →

              </span>

            }

          </button>

        </form>


        <!-- Register -->
        <div
          class="mt-7 text-center text-sm text-slate-500">

          <span>
            Don't have an account?
          </span>

          <a
            href="/register"
            class="ml-1 font-semibold text-indigo-600
                   hover:text-indigo-800 hover:underline">

            Create an account

          </a>

        </div>


        <!-- Security -->
        <div
          class="mt-6 flex items-center justify-center gap-1.5
                 text-xs text-slate-400">

          <svg
            class="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">

            <rect
              x="4"
              y="10"
              width="16"
              height="11"
              rx="2"/>

            <path d="M8 10V7a4 4 0 0 1 8 0v3"/>

          </svg>

          Secure authentication

        </div>

      </div>

    </div>
  `,

  styles: `
    @keyframes float {
      0%, 100% {
        transform: translate3d(0, 0, 0) scale(1);
      }

      50% {
        transform: translate3d(0, -25px, 0) scale(1.05);
      }
    }

    @keyframes cardEnter {
      from {
        opacity: 0;
        transform: translateY(30px) scale(.96);
      }

      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes logoEnter {
      from {
        opacity: 0;
        transform: scale(.5) rotate(-20deg);
      }

      to {
        opacity: 1;
        transform: scale(1) rotate(0);
      }
    }

    @keyframes errorEnter {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }

      25% {
        transform: translateX(-5px);
      }

      75% {
        transform: translateX(5px);
      }
    }
  `
})
export class Login {
  private authService = inject(AuthService);
  readonly loginModel = signal<LoginModel>({
    email: '',
    password: '',
    rememberMe: false
  });

  readonly showPassword = signal(false);

  readonly isLoading = computed(() => this.authService.isProcessing());

  readonly loginError = this.authService.lastLoginErrMsg;

  readonly loginForm = form(
    this.loginModel,
    (schema) => {

      required(schema.email);
      email(schema.email);

      required(schema.password);
      minLength(schema.password, 4);

    }
  );


  togglePassword(): void {
    this.showPassword.update(value => !value);
  }


   login() {

    if (this.loginForm().invalid()) {
      return;
    }

    try {

      const credentials = this.loginModel();

      this.authService.logUserIn(credentials.email, credentials.password);

      console.log('Login credentials:', credentials);

      /*
       * Navigate after successful authentication.
       */


    } catch {

      this.loginError.set(
        'Unable to sign in. Please check your email and password.'
      );

    } finally {


    }
  }
}
