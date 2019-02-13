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

  showErrorMessageByService(messageService: MessageService, error: any) {
    messageService.add({severity: 'error', summary: error.error.message});
  }

  showErrorMessage(error: any) {
    this.messageService.add({severity: 'error', summary: error.error.message});
  }

  showInfoMessage(info: string) {
    this.messageService.add({severity: 'info', summary: info});
  }

  // prepareDropDownOptions(list: any[], labelField: any): any[] {
  //   const options = [];
  //   options.push({label: 'انتخاب کنید', value: null});
  //   if (!list) {
  //     return options;
  //   }
  //   for (let item of list) {
  //     options.push({label: item[labelField], value: item});
  //   }
  //   console.log('options', options);
  //   return options;
  // }

  prepareDropDownOptions(input: any[], labelField: string): any[] {
    if (!input)
      return [];
    let result = [];
    let item = {label: 'انتخاب کنید', value: null};
    result.push(item);
    input.forEach(i => {
      let item = {label: i[labelField], value: i};
      result.push(item);
    });
    return result;
  }
}
