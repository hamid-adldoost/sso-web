import {Component, OnInit} from '@angular/core';
import {PermissionsService} from '../permissions/permissions.service';
import {UsersService} from '../users/users.service';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';
import {RolesService} from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  role: any;
  rolesList = [];
  permissionList = [];
  remainingPermissions = [];
  selectedPermissions = [];
  existingPermissions = [];

  constructor(private roleService: RolesService,
              private permissionService: PermissionsService,
              public commonService: CommonService,
              // private route: ActivatedRoute
  ) {
    console.log('hahahaha');
  }

  ngOnInit() {

    this.role = new Object();

    this.roleService.findAllRoles().subscribe(res => {
      console.log(res);
      this.rolesList = res.data;
    }, error => {
      this.commonService.showErrorMessage(error);
    });

    this.permissionService.findAllPermissions().subscribe(res => {
      this.permissionList = res.data;
    }, error => {
      this.commonService.showErrorMessage(error);
    })

  }

  addRole() {
    this.roleService.saveRole(this.role).subscribe(res => {
      this.commonService.showInfoMessage('عملیات با موفقیت انجام شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  edit(rowData) {
    this.role = JSON.parse(JSON.stringify(rowData));
    console.log('editing', rowData);
  }

  remove(id: any) {
    this.roleService.removeRole(id).subscribe(res => {
      this.commonService.showInfoMessage('عملیات با موفقیت انجام شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  clear() {
    this.role = new Object();
  }
}
