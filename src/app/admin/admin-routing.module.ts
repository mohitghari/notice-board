import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AdminNoticeComponent } from './admin-notice/admin-notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { ViewNoticeDetailComponent } from './view-notice-detail/view-notice-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
   
    children : [
      {
        path:'',
        children:[
          { 
            path: 'login', 
            component: LoginComponent
          },
          {
            path : 'notices/add-notice',
            canActivate:[AuthGuard],  
            component:AddNoticeComponent,
          },      
          {
            path : 'notices/:id' , 
            canActivate:[AuthGuard],
            component:ViewNoticeDetailComponent
          },
          { 
            path: '' , 
            component: LoginComponent
          },
          { 
            path: 'notices',
            canActivate:[AuthGuard],
            component: AdminNoticeComponent 
          },
          
        ]
      }
    ],
    
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
