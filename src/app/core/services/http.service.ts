import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  testApi() {
    return this.http.get<any>(`${this.apiUrl}/users/1`);
  }

  postUser($newUser) {
    return (this.http.post<any>(`${this.apiUrl}/users`, $newUser));
  }

}
