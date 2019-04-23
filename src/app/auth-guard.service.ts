import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './http-interceptor/auth.service';
import {Observable} from 'rxjs';
import {CommonService} from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private commonService: CommonService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (state.url == '/login') {
      return true;
    }
    if (this.authService.hasRole('ADMIN_ROLE')) {
      return true;
    } else {
      this.commonService.showPureErrorMessage('دسترسی امکان پذیر نمی باشد');
      console.log('access denied', state);
      return null;
    }

    // console.log('state', state)
    // return true;
    // return undefined;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('state', state)
    return true;
    // return undefined;
  }

  // canActivate() {
  //   console.log('i am checking to see if you are logged in');
  //   return true;
  // }
  //
  // canActivateChild() {
  //   console.log('checking child route access');
  //   return true;
  // }


}
