import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  serviceUrl = `${environment.baseServiceUrl}`;

  constructor(private httpClient: HttpClient) { }

  fetchUsers(event: any, filters: any): Observable<any> {
    let request = this.serviceUrl + '/security-user/search?t=1';
    if (event) {
      if (event.first) {
        request += '&firstIndex='  + +event.first;
      }
      if (event.first) {
        request += + '&pageSize=' + event.rows;
      }
    }
    if (filters) {
      console.log('filters', filters);
      if (filters.username) {
        request += '&username=' + filters.username.value;
      }
      if (filters.email) {
        request += '&email=' + filters.email.value;
      }
    }
    return this.httpClient.get(request);
  }

  saveUser(user: any): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/security-user/save', user);
  }

  deleteUser(id: any): Observable<any> {
    return this.httpClient.delete(this.serviceUrl + '/security-user/remove/' + id);
  }

  findByUsername(username: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/security-user/search/?username=' + username);
  }

  findUnAssignedPermissions(id: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/security-user/unassigned-permissions/' + id);
  }

  findUnAssignedRoles(id: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/security-user/unassigned-roles/' + id);
  }

  addPermissionToUser(permissions: any[], id: any): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/security-user/add-permission/' + id, permissions);
  }
}
