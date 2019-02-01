import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUtilityService {

  serviceUrl = `${environment.baseServiceUrl}`;
  securityServiceUrl = `${environment.securityServiceUrl}`;

  constructor(private httpClient: HttpClient) {

  }


  saveUser(user: any): Observable<any> {
    return this.httpClient.post(this.securityServiceUrl + '/security-user/save/', user );
  }

  fetchUsers(first: number | undefined, rows: number | undefined, searchDto: any): Observable<any> {

    let url = '/security-user/search/?t=1';
    if (searchDto.email) {
      url += '&username=' + searchDto.username;
    }
    if (first) {
      url += '&firstIndex=' + first;
    } else {
      url += '&firstIndex=0';
    }
    if (rows) {
      url += '&pageSize=' + rows;
    } else {
      url += '&pageSize=50';
    }

    return this.httpClient.get(this.securityServiceUrl + url);

  }

  changePass(user: any): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('email', user.email);
    formData.append('oldPass', user.oldPass);
    formData.append('pass', user.pass);

    console.log(formData);
    return this.httpClient.post(this.securityServiceUrl + '/security-user/change-pass', formData);
  }

  loadEtebarTitleList(first: number | undefined, rows: number | undefined): Observable<any> {

    return this.httpClient.get(this.serviceUrl + '/manabe-dakheli-title/search/?firstIndex=' + first + '&pageSize=' + rows);
  }

  deleteEtebarTitle(id: any): Observable<any> {
    return this.httpClient.delete(this.serviceUrl + '/manabe-dakheli-title/remove/' + id);
  }

  saveEtebarTitle(etebar: any): Observable<any> {

    return this.httpClient.post(this.serviceUrl +  '/manabe-dakheli-title/save/', etebar);

  }

  loadDepartmentsForUser(userId: string): Observable<any> {
    return this.httpClient.get(this.serviceUrl + '/user-department/search/?userId=' + userId );
  }

  loadUnSelectedDepartmentsForUser(userId: string): Observable<any> {

    return this.httpClient.get(this.serviceUrl + '/user-department/unselected/?userId=' + userId );
  }

  saveUserDepartment(userDepartment: any): Observable<any> {

    return this.httpClient.post(this.serviceUrl + '/user-department/save', userDepartment);
  }
}
