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
          console.log('user:', this.user);
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

  removePermissionForUser(id: any) {
    this.usersService.removePermissionForUSer(id, this.user.id).subscribe(res => {
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  removeRoleFromUser(id: any) {
    this.usersService.removeRoleForUSer(id, this.user.id).subscribe(res => {
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  addPermission() {
    const permissions = [];
    permissions.push(this.permission.id);
    this.usersService.addPermissionToUser(permissions, this.user.id).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت ثبت شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  addRole() {
    const roles = [];
    roles.push(this.role.id);
    this.usersService.addRoleToUser(roles, this.user.id).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت ثبت شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
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
