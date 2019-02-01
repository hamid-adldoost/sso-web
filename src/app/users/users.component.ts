import { Component, OnInit } from '@angular/core';
import {AdminUtilityService} from '../admin-utility/admin-utility.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {LazyLoadEvent} from 'primeng/api';
import {Router} from '@angular/router';
import {UsersService} from './users.service';
import {CommonService} from '../common.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  repeatPassword: any;
  totalRecords: any;
  userList = [];
  searchDto: any;
  loading = false;


  constructor(private usersService: UsersService,
              private messageService: MessageService,
              private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {

    this.user = new Object();
    this.repeatPassword = '';
    this.searchDto = new Object();
    this.loadUserList(new Object());
  }

  save() {
    this.usersService.saveUser(this.user).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت ثبت شد');
      this.ngOnInit();
    }, error => {
      this.messageService.add({severity: 'error', summary: error.error.message});
    });
  }

  loadUserList(event: LazyLoadEvent) {
    console.log(event.filters);
    this.usersService.fetchUsers(event, event.filters).subscribe(res => {
      this.userList = res.data;
      this.totalRecords = res.count;
    }, error => {
      this.messageService.add({severity: 'error', summary: error.error.message});
    });
  }

  gotoPermissions(user: any) {
    this.router.navigateByUrl('/inner/permissions?username=' + user.username);
  }

  gotoRoles(userId: any) {
    this.router.navigateByUrl('/inner/roles?userId=' + userId);
  }

  changePass(userId: any) {
    this.router.navigateByUrl('/inner/change-pass?userId=' + userId);
  }

  edit(rowData) {
    this.user = JSON.parse(JSON.stringify(rowData));
  }

  delete(id: any) {
    return this.usersService.deleteUser(id).subscribe(res => {
      this.commonService.showInfoMessage('عملیات حذف انجام شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  cancel () {
    this.user = new Object();
  }
}
