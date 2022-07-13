import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private dataservec:DataService,private router:Router) { }
  canActivate(): boolean {
    if(this.dataservec.loggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
