import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {
  constructor(private router:Router) { }
  jwt:any=localStorage.getItem('token');
  jwtdecodage:any =jwtDecode(this.jwt);

  canActivate(): boolean {
    if(this.jwtdecodage.role=="admin"){
      return true;
    }
    else{
      this.router.navigate(['/dashborduser']);
      return false;
    }
  }


  
}
