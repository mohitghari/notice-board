import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { AdminComponent } from './admin/admin.component';

import { AdminModule }      from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NoticeBoardComponent,
    // AdminComponent,
     PageNotFoundComponent
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
