import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InnerComponent} from './inner/inner.component';
import {UsersComponent} from './users/users.component';
import {ChangePassComponent} from './change-pass/change-pass.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {RolesComponent} from './roles/roles.component';
import {WebPageComponent} from './web-page/web-page.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inner/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'inner',
    component: InnerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'change-pass',
        component: ChangePassComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'permissions',
        component: PermissionsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'roles',
        component: RolesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'web-page',
        component: WebPageComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'menu',
        component: MenuComponent,
        canActivate: [AuthGuardService],
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
