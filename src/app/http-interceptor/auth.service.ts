import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  serviceUrl = `${environment.baseServiceUrl}/`;

  constructor(private router: Router,
              private httpClient: HttpClient) {

  }

  public getToken(): string {
    return localStorage.getItem('auth-token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    // return tokenNotExpired(token);
    return true;
  }

  public logout() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('roles');
    this.router.navigateByUrl('/login');
  }

  public getCurrentUserRoles(): String[] {

    const rolesObject = localStorage.getItem('roles');
    return JSON.parse(rolesObject);
  }

  public setCurrentUserRoles(roles: String[]) {
    const rolesObject = localStorage.setItem('roles', JSON.stringify(roles));
  }

  login(user: any): Observable<any> {
    const body = new FormData();
    body.set('username', user.username);
    body.set('password', user.password);
    return this.httpClient.post(this.serviceUrl + '/auth/login', body);
  }

  public hasRole(role: String): boolean {
    const roles = this.getCurrentUserRoles();
    if (roles && roles.indexOf(role) > -1) {
      return true;
    }
    return false;
  }
}
