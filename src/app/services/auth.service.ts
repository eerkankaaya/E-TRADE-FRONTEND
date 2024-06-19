import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModule } from '../modules/loginModule';
import { SingleResponseModule } from '../modules/singleResponseModule';
import { TokenModule } from '../modules/tokenModule';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7160/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModule){
    return this.httpClient.post<SingleResponseModule<TokenModule>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }



}