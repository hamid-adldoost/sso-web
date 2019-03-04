import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebPageService {

  serviceUrl = `${environment.baseServiceUrl}`;

  constructor(private httpClient: HttpClient) {

  }

  findAllPages(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/web-page/search');
  }

  saveWebPage(webPage: any): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/web-page/save', webPage);
  }

  removeWebPage(id: any): Observable<any> {
    return this.httpClient.delete(this.serviceUrl + '/web-page/delete/' + id);
  }
}
