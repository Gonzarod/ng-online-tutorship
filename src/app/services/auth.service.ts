import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuthUser} from '../interfaces/auth-user';
import {Observable} from 'rxjs';
import {MessageResponse} from '../interfaces/message-response';
import {IAuthResponse} from '../interfaces/auth-response';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;



  constructor(private http: HttpClient) { }

  signIn(body: IAuthUser): Observable<MessageResponse<IAuthResponse>>{
    return this.http.post<MessageResponse<IAuthResponse>>(environment.apiUrl+'/auth/signin',body);
  }

  logOut(){
    localStorage.removeItem('token');
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }



  setIsLogged(value: boolean): void {
    this.isLogged=value;
  }

  getIsLogged(): boolean{
    return this.isLogged;
  }
}
