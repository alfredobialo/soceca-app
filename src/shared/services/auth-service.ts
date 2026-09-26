import {inject, Service, Signal, signal} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';

export interface UserInfo {
  username: string,
  name: string,
  password: string,
}
@Service()
export class AuthService {
  private userDatabase : UserInfo[] = [
    {username: 'alfredobialo@gmail.com', name: 'Alfred Obialo', password: "123456"},
    {username: 'alvana@gmail.com', name: 'Alvana Iwuh', password: "123456"},
    {username: 'munachi@gmail.com', name: 'Munachi Chikezie', password: "123456"},
    {username: 'johndoe@gmail.com', name: 'John Nkedo', password: "123456"},
  ];

  private router  = inject(Router);

  private currentUser = signal<UserInfo | null>(null);
  lastLoginErrMsg= signal("");
  isProcessing = signal(false);
  getCurrentUser() : Signal<UserInfo | null>{
    return (this.currentUser);
  }

  updateUserName(name: string) {
    const user = this.currentUser();
    if (!user) return;
    const updatedUser = {...user, name};
    this.userDatabase = this.userDatabase.map(x => x.username === user.username ? updatedUser : x);
    this.currentUser.set(updatedUser);
  }

  logUserIn(userId : string, pwd : string)
  {
    this.isProcessing.set(true);
     setTimeout(() => {
       const userObj = this.userDatabase.find(x => x.username === userId && x.password === pwd);
       if (userObj) {
          this.currentUser.set(userObj);
          this.lastLoginErrMsg.set("");
          this.router.navigateByUrl("");
       }
       else{
         // return errMessage
         this.lastLoginErrMsg.set("Oops! User id or Password did not match!");
       }
       this.isProcessing.set(false);
     }, 4000);
  }

  isUserAuthenticated(){
    return this.getCurrentUser()() !== null;
  }
}
export const  authGuard : CanActivateFn = (route: ActivatedRouteSnapshot, routeState : RouterStateSnapshot)=>
{
  const  authSvc  =  inject(AuthService);
  const router = inject(Router)
  if(authSvc.isUserAuthenticated()){
    return true;
  }
  router.navigateByUrl("/login");
  return false;
}
