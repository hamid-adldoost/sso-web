import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  serviceUrl = `${environment.baseServiceUrl}`;

  constructor(private httpClient: HttpClient) { }


  findAllPermissions(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/security-permission/search');
  }
}
