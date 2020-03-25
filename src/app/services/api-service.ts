import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  API_URL: any;
  constructor(private httpClient: HttpClient) { }
  // getUsers() : Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }

  public apiRequest(URL: any, method: any, token: any, payload: any) {
    let headers: any;
    this.API_URL = `http://172.17.103.108:8000`;
    console.log(token);
    if (token)
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    else
      headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    if (method === "GET") {
      return new Promise((resolve, reject) => {
        this.httpClient.get(`${this.API_URL}/${URL}`, { headers })
          .subscribe(response => {
            resolve(response);
          },
            error => {
              console.log(error);
              reject(error);
            });
      })
    } else if (method === "POST") {
      return new Promise((resolve, reject) => {
        this.httpClient.post(`${this.API_URL}/${URL}`, payload, { headers })
          .subscribe(response => {
            resolve(response);
          },
            error => {
              reject(error);
            });
      })
    } else if (method === 'PUT') {
      return new Promise((resolve, reject) => {
        this.httpClient.put(`${this.API_URL}/${URL}`, payload, { headers })
          .subscribe(response => {
            resolve(response);
          },
            error => {
              reject(error);
            });
      })
    }
    else if (method === "DELETE") {
      return new Promise((resolve, reject) => {
        this.httpClient.delete(`${this.API_URL}/${URL}`, { headers })
          .subscribe(response => {
            resolve(response);
          },
            error => {
              reject(error);
            });
      })
    }
    else {
      return new Promise((resolve, reject) => {
        resolve({
          success: false,
          msg: 'No Method Found'
        });
      })
    }
  }
}
