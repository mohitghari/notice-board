import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { NoticeModel } from './notice-model';
@Injectable({
  providedIn: 'root'
})
export class GetAllNoticeService {

  constructor(private httpClient:HttpClient) {    }

  getNotice():Observable<any>{

   return this.httpClient.get('http://192.168.2.136:3000/notice');
  }   
}
