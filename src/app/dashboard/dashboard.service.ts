
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable()
export class DashboardService {

  serviceUrl = environment.baseServiceUrl + '/dashboard';

  constructor(private httpClient: HttpClient) {

  }

    getQuestionnaireCount(): Observable<number> {
      return this.httpClient.get<number>(this.serviceUrl + '/questionnaire-count');
    }

    getAnswersheetCount(): Observable<number> {
      return this.httpClient.get<number>(this.serviceUrl + '/answersheet-count');
    }

    getAnswersheetCountForLast24Hours(): Observable<number> {
      return this.httpClient.get<number>(this.serviceUrl + '/answersheet-count-last-24-hour');
    }

    getAverageSatisfactionLevel(): Observable<number> {
      return this.httpClient.get<number>(this.serviceUrl + '/satisfaction-level');
    }
}
