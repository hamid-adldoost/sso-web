import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InnerComponent} from './inner/inner.component';
import {JalaliPipe} from './pipes/jalali.pipe';
import {JalaliTimePipe} from './pipes/jalali-time.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';
import {RouterModule} from '@angular/router';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {AppRoutingModule} from './app.routing';
import {AuthService} from './http-interceptor/auth.service';
import {DwmHttpInterceptor} from './http-interceptor/dwm-http-interceptor';
import {DataTableModule} from 'primeng/datatable';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {
  AutoCompleteModule, CheckboxModule, ConfirmDialogModule, DropdownModule, InputSwitchModule, KeyFilterModule,
  MessagesModule, MultiSelectModule,
  OrganizationChartModule, RadioButtonModule, SelectButtonModule, SpinnerModule, TreeTableModule, PanelMenuModule, MenuItem,
  FileUploadModule, TreeModule,
} from 'primeng/primeng';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {HttpStatusService} from './http-interceptor/http-status.service';
import {DashboardService} from './dashboard/dashboard.service';
import {ConfirmationService, TreeNode} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import {InplaceModule} from 'primeng/inplace';
import {DialogModule} from 'primeng/dialog';
import {QuestionStatusPipe} from './pipes/question-status-pipe';
import {ChartModule} from 'primeng/chart';
import { UsersComponent } from './users/users.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesComponent } from './roles/roles.component';
import { WebPageComponent } from './web-page/web-page.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InnerComponent,
    JalaliPipe,
    JalaliTimePipe,
    QuestionStatusPipe,
    UsersComponent,
    ChangePassComponent,
    PermissionsComponent,
    RolesComponent,
    WebPageComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    DataTableModule,
    TableModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    GrowlModule,
    KeyFilterModule,
    AutoCompleteModule,
    DpDatePickerModule,
    OrganizationChartModule,
    CheckboxModule,
    RadioButtonModule,
    SelectButtonModule,
    SpinnerModule,
    MessageModule,
    MessagesModule,
    InplaceModule,
    InputSwitchModule,
    TreeTableModule,
    DialogModule,
    ConfirmDialogModule,
    ChartModule,
    PanelMenuModule,
    PanelMenuModule,
    FileUploadModule,
    GrowlModule,
    MultiSelectModule,
    TreeModule,
    TreeTableModule,
  ],
  providers: [
    AuthService,
    MessageService,
    HttpStatusService,
    DashboardService,
    ConfirmationService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DwmHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
