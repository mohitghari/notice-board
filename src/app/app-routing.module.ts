import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'notice-board', component: NoticeBoardComponent },
  { path: '', redirectTo: '/notice-board', pathMatch: 'full' },
 // { path: 'admin', component: AdminComponent }
 
  {   path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
