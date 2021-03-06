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
     this.API_URL = ``;
    console.log(token);
    if (token)
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  'Access-Control-Allow-Origin': '*'
      });
    else
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
    if (method === "GET") {
      return new Promise((resolve, reject) => {
        this.httpClient.get(`${URL}`, { headers })
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
  checkLogin(email:string,password:string){
    if(email=="admin@gmail.com" && password=="admin123"){
      localStorage.setItem("email",email)
      return true;
    }else{
      return false;
    }
  }
}
