import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  serviceUrl = `${environment.baseServiceUrl}/`;

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {

  }


  findAllRoles(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/security-role/search');
  }

  removeRole(id: any): Observable<any> {
    return this.httpClient.delete(this.serviceUrl + '/security-role/remove/' + id);
  }

  saveRole(role: any): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/security-role/save', role);
  }
}
