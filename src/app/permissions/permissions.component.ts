import { Component, OnInit } from '@angular/core';
import {PermissionsService} from './permissions.service';
import {CommonService} from '../common.service';
import {UsersService} from '../users/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  user: any;
  permissionsTotalRecords: any;
  rolesTotalRecords: any;
  role: any;
  remainingRoles = [];
  permission: any;
  remainingPermissions = [];

  constructor(private permissionsService: PermissionsService,
              private usersService: UsersService,
              private commonService: CommonService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.user = new Object();


    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        console.log('calling by username..');
        this.usersService.findByUsername(params['username']).subscribe(res => {
          this.user = res.data[0];
          if (this.user) {
            this.usersService.findUnAssignedPermissions(this.user.id).subscribe(res2 => {
              this.remainingPermissions = this.prepareDropDownOptions(res2);
            }, error => {
              this.commonService.showErrorMessage(error);
            });
            this.usersService.findUnAssignedRoles(this.user.id).subscribe(res3 => {
              this.remainingRoles = this.prepareDropDownOptions(res3);
            }, error => {
              this.commonService.showErrorMessage(error);
            });
          }
        }, error => {
          this.commonService.showErrorMessage(error);
        });

      }
    });
  }

  deletePermission(id: any) {

  }

  deleteRole(id: any) {

  }

  loadUserRoles($event: any) {

  }

  addPermission() {
    const permissions = [];
    permissions.push(this.permission);
    this.usersService.addPermissionToUser(permissions, this.user.id).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت ثبت شد');
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  addRole() {

  }

  prepareDropDownOptions(list: any[]): any[] {
    const options = [];
    options.push({label: 'انتخاب کنید', value: null});
    if (!list) {
      return options;
    }
    for (let item of list) {
      options.push({label: item.title, value: item});
    }
    console.log('options', options);
    return options;
  }
}
