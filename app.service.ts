import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticate(strategy: string, user: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient 
  ) { }
register(strategyName:String, data?: any){
  return this.http.post('http://localhost:3000/api/sign-up',data);
}
login(strategyName:String, data?: any){
  return this.http.post('http://localhost:3000/api/login',data);
}

  secretkey(){
   return this.http.get('http://localhost:3000/api/secret-route');
  }
}