import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string = "/api";
  private headers = new HttpHeaders().set( 'Authorization', 'Bearer ' +this.getToken() )
  .append('Content-Type' , 'application/json')
  .append('Accept','*/*');

  private reqBody = {"token":this.getToken()};

  constructor(private http:HttpClient) { }

  authenticate(credentials:any){
    return this.http.post(`${this.baseUrl}/token`, credentials, {responseType: 'json'});
  }

  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`, data, {responseType: 'json'});
  }

  storeToken(token){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token ==='' || token== null){
      return false;
    } else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
 
  getUserName(){
    return this.http.get<any>(`${this.baseUrl}/user/name`, {headers: this.headers });
  }

}

