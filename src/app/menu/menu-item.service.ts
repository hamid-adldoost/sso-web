import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  serviceUrl = `${environment.baseServiceUrl}`;

  constructor(private httpClient: HttpClient) {

  }

  fetchAllMenus(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/menu-item/fetch-all');
  }

  deleteItem(id: any): Observable<any> {
    return this.httpClient.delete(this.serviceUrl + '/menu-item/remove/' + id);
  }

  saveMenuItem(item: Object): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/menu-item/save', item);
  }

  findById(id: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/menu-item/' + id);
  }
}
