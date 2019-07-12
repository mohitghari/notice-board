import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminNoticeComponent } from './admin-notice/admin-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNoticeComponent } from './add-notice/add-notice.component';
//import { ViewNoticeDeatilComponent } from './view-notice-deatil/view-notice-deatil.component';
import { ViewNoticeDetailComponent } from './view-notice-detail/view-notice-detail.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminNoticeComponent,
    AddNoticeComponent, 
    ViewNoticeDetailComponent,
    AdminComponent  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ]
})
export class AdminModule { }
