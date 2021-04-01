import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageResponse} from '../interfaces/message-response';
import {Tutorship} from '../interfaces/tutorship';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorshipService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<MessageResponse<Tutorship[]>> {

    console.log(localStorage.getItem('token'))

    /*
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    */

    return this.http.get<MessageResponse<Tutorship[]>>(environment.apiUrl+'/tutorship');

  }
}
