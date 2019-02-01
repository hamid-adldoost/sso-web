import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {AdminUtilityService} from '../admin-utility/admin-utility.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {


  user: any;

  constructor(private messageService: MessageService,
              private adminUtilService: AdminUtilityService) {

  }


  ngOnInit() {
    this.user = new Object();
  }

  changePass(event: any) {

    console.log('trying to change password');
    if (this.user.pass === this.user.repeatPassword) {
      this.adminUtilService.changePass(this.user).subscribe(res => {
        this.messageService.add({severity: 'info', summary: 'با موفقیت ثبت شد'});
        this.user = new Object();
      }, error => {
        this.messageService.add({severity: 'error', summary: error.error.message});
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'کلمه عبور و تکرار آن مطابق نیست'});
    }

  }
}
