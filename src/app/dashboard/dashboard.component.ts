import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countOfAnswersheet = 0;
  countOfQuestionnaire = 0;
  countOfAnswersheetLast24Hours = 0;
  averageSatisfactionLevel = 0;

  firstIndex = 0;
  pageSize = 10;
  totalCount = 0;

  constructor(private dashboardService: DashboardService,
              private messageService: MessageService) { }


  ngOnInit() {

      this.getCountOfAnswersheets();
      this.getQuestionnaireCount();
      this.getCountOfAnswersheetLast24Hours();
      this.getAverageSatisfactionLevel();

      this.searchLazyTickets();
  }

  getCountOfAnswersheets(): void {
    // this.dashboardService.getAnswersheetCount().subscribe(res => {
    //   this.countOfAnswersheet = res;
    // }, error => {
    //   this.messageService.add({severity: 'error', summary: error.error.message});
    // });
  }

    getQuestionnaireCount(): void {

      // this.dashboardService.getQuestionnaireCount().subscribe(res => {
      //   this.countOfQuestionnaire = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

    getCountOfAnswersheetLast24Hours(): void {

      // this.dashboardService.getAnswersheetCountForLast24Hours().subscribe(res => {
      //   this.countOfAnswersheetLast24Hours = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

    getAverageSatisfactionLevel(): void {
      // this.dashboardService.getAverageSatisfactionLevel().subscribe(res => {
      //   this.averageSatisfactionLevel = res;
      // }, error => {
      //   this.messageService.add({severity: 'error', summary: error.error.message});
      // });
    }

    searchLazyTickets(event?: LazyLoadEvent) {

    if (event) {
      this.firstIndex = event.first;
      this.pageSize = event.rows;
    } else {
      this.firstIndex = 0;
      this.pageSize = 10;
    }
  }
}
