import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuthUser} from '../model/auth-user';
import {Observable} from 'rxjs';
import {MessageResponse} from '../model/message-response';
import {IAuthResponse} from '../model/auth-response';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(body: IAuthUser): Observable<MessageResponse<IAuthResponse>>{
    return this.http.post<MessageResponse<IAuthResponse>>(environment.apiUrl+'/auth/signin',body)
  }
}
