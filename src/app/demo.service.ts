import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

	user: User;

  constructor(
  	private http: HttpClient
  	) { }

  send_data(user): Observable<any> {
  	this.user = user;
  	return this.http.post<any>('/submit', {user});
  }
}
