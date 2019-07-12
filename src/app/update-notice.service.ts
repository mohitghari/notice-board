import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NoticeModel } from './notice-model';

@Injectable({
  providedIn: 'root'
})
export class UpdateNoticeService {

  constructor(private httpClient:HttpClient) { }
  updateNotice(id:number,title:string,detail:string):Observable<NoticeModel>
  {
    return this.httpClient.put('http://192.168.2.136:3000/notice/' + id ,{
      title,
      detail
    },
    {
      headers : {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
    }
    )
  }
}
/*
 updateTodo(id:number,title:string):Observable<Todo>
  {
    return this.httpClient.put('http://192.168.2.136:3000/todo/' + id, 
    {
      title:title,
      isCompleted:false
    },
    {
      headers : {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
    });
  }

*/