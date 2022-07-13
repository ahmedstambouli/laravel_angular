import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  registeruser(form:any){
    return this.http.post(environment.apiUrl+'Register',form);
  } 

  loginuser(form:any){
    return this.http.post(environment.apiUrl+'Login',form);
  }


  getAllUsers(){
    return this.http.get(environment.apiUrl+'users');
  }

  getUserId(id:any){
    return this.http.get(environment.apiUrl+'userid/'+id);
  }


  updateUser(form:any,id:any){
    return this.http.put(environment.apiUrl+'updateuser/'+id,form);
  }

  deleteUser(id:any){
    return this.http.delete(environment.apiUrl+'deleteUser/'+id);
  }

  getbyemail(email:any){
    return this.http.get(environment.apiUrl+'getbyemail/'+email);
  }

  updateuseractiv(id:any){
    return this.http.put(environment.apiUrl+'activateuser/'+id,{});
  }


  loggedIn(){
    return !!localStorage.getItem('token');
  } 
  logout(){
    localStorage.removeItem('token');
  }

  getusernotactiv(){
    return this.http.get(environment.apiUrl+'notactiv');
  }
}
