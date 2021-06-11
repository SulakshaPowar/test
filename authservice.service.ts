import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
    login(data): Observable<any>{
      return this.http.post('localhost:3000/api/login',data)
    }
  
}
