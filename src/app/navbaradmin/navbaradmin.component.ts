import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  constructor(private dataservice:DataService,private router: Router) { }

  token:any;
  id:any;
  data:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.id=this.data.user_id;
    this.getuser();
  }


  User:any;
  getuser(){
    this.dataservice.getUserId(this.id).subscribe(res=>{
      this.data=res;
      this.User=this.data.utilisateur;
      console.log(this.User);
  
    }
    );
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
    }
  
  


}
