import { Component, OnInit } from '@angular/core';
import {RolesService} from '../roles/roles.service';
import {PermissionsService} from '../permissions/permissions.service';
import {CommonService} from '../common.service';
import {WebPageService} from './web-page.service';
import {AdminUtilityService} from '../admin-utility/admin-utility.service';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.css']
})
export class WebPageComponent implements OnInit {

  webPage: any;
  webPageList = [];

  constructor(private adminUtilityService: AdminUtilityService,
              private webPageService: WebPageService,
              public commonService: CommonService,
              // private route: ActivatedRoute
  ) {
    console.log('hahahaha');
  }

  ngOnInit() {

    this.webPage = new Object();

    this.webPageService.findAllPages().subscribe(res => {
      console.log(res);
      this.webPageList = res.data;
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  addWebPage() {
    this.webPageService.saveWebPage(this.webPage).subscribe(res => {
      this.commonService.showInfoMessage('عملیات با موفقیت انجام شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  edit(rowData) {
    this.webPage = JSON.parse(JSON.stringify(rowData));
    console.log('editing', rowData);
  }

  remove(id: any) {
    this.webPageService.removeWebPage(id).subscribe(res => {
      this.commonService.showInfoMessage('عملیات با موفقیت انجام شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  clear() {
    this.webPage = new Object();
  }

}
