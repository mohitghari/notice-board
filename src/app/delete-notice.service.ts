import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteNoticeService {

  constructor(private httpClient:HttpClient) { }

  deleteNotice(id:number):Observable<any>
  {
    return this.httpClient.delete('http://192.168.2.136:3000/notice/' + id ,{
      headers : {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
    })
  }
}
