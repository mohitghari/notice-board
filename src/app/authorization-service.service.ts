import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {

  constructor(private httpClient:HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.httpClient.post(
        'http://192.168.2.136:3000/login',
        {
            email,
            password
        }
    );
}
}
