import { Component, OnInit } from '@angular/core';
import {AuthService} from '../http-interceptor/auth.service';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService,
              private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.user = new Object();

  }

  login() {
    this.authService.login(this.user).subscribe(res => {
      this.authService.setCurrentUserRoles(res.roles);
      this.router.navigateByUrl('/inner/dashboard');
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }
}
