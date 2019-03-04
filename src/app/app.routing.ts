import {NgModule} from '@angular/core';
import {CommonModule, } from '@angular/common';
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

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inner/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'inner',
        component: InnerComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'users',
            component: UsersComponent,
          },
          {
            path: 'change-pass',
            component: ChangePassComponent,
          },
          {
            path: 'permissions',
            component: PermissionsComponent,
          },
          {
            path: 'roles',
            component: RolesComponent,
          },
          {
            path: 'web-page',
            component: WebPageComponent,
          },
          {
            path: 'menu',
            component: MenuComponent,
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
