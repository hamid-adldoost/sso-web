
import { Component, OnInit} from '@angular/core';
import {HttpStatusService} from '../http-interceptor/http-status.service';
import {Router} from '@angular/router';

// declare const $: any;

@Component({
    selector: 'app-inner',
    templateUrl: './inner.component.html',
    styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

    constructor( private httpStatusService: HttpStatusService,
                 private router: Router) {}

    ngOnInit() {

      // $.material.init();

    }
    connectionRunning(): boolean {
        if (this.httpStatusService.getConnectionCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

  gotoHome() {
      this.router.navigateByUrl('/');
  }
}
