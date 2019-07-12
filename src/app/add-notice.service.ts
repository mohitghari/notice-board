import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticeModel } from './notice-model';
@Injectable({
  providedIn: 'root'
})
export class AddNoticeService {

  constructor(private httpClient:HttpClient) { }

  addNotice(title:string,date:string,detail:string):Observable<any>
  {
      let notice : NoticeModel;
      notice={
          title : title,
          detail: detail,
          date:date
      }

      return this.httpClient.post('http://192.168.2.136:3000/notice',notice,
      {
        headers : {
          'Authorization': 'Bearer '+localStorage.getItem('token')
        }
      })
  }
}
/*
addItem(itemName:string):Observable<Todo>
{
  console.log(itemName);
 let todo:Todo;
 todo = {
   title : itemName,
   isCompleted : false
 }
 return this.httpClient.post('http://192.168.2.136:3000/todo',todo,
  {
    headers: {
        'Authorization': 'Bearer '+localStorage.getItem('token')
    }
  });*/