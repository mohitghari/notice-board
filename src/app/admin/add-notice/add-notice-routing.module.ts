import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoticeComponent } from './add-notice.component';

const routes: Routes = [
  {
    path:'',
    component:AddNoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNoticeRoutingModule { }
