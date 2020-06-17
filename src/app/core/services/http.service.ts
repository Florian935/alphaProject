import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/sessions/${id}`);
  }

  postUser($newUser) {
    return (this.http.post<any>(`${this.apiUrl}/users`, $newUser));
  }

}
