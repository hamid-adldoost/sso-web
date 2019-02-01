import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  serviceUrl = `${environment.baseServiceUrl}/`;

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {

  }

  getAllDepartments(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'department/search');
  }

  getAllEtebars(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'etebar/search');
  }

  getAllScaleTypeItems(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'scaleTypeItem/search');
  }

  getsmallScaleTypeItems(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'scaleTypeItem/search?scaleTypeId=2');
  }

  getLargeScaleTypeItems(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'scaleTypeItem/search?scaleTypeId=1');
  }

  getUnits(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'unit/search');
  }

  getOrganizations(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'organization/search');
  }

  getMainCreditsOfYear(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'mainCredit/search');
  }

  getPlanTitles(activityType: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'incomeCreditPlanTitles/search?isGheireEblaghi=' + activityType);
  }

  getPersianMonthName(monthNo: any): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'persianMonth/search?=' + monthNo);
  }

  getPersianMonthes(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'persianMonth/search');
  }

  loadUnits(): Observable<any> {
    return this.httpClient.get(this.serviceUrl + 'unit/search');
  }

  saveUnit(unit: any): Observable<any> {
    return this.httpClient.post(this.serviceUrl + '/unit/save', unit);
  }

  deleteUnit(id: any) {
    return this.httpClient.delete(this.serviceUrl + '/unit/remove/' + id);
  }

  showErrorMessageByService(messageService: MessageService, error: any) {
    messageService.add({severity: 'error', summary: error.error.message});
  }

  showErrorMessage(error: any) {
    this.messageService.add({severity: 'error', summary: error.error.message});
  }

  showInfoMessage(info: string) {
    this.messageService.add({severity: 'info', summary: info});
  }
}
