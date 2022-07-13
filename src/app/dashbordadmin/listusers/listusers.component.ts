import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private dataservice:DataService) { }
    Users:any;
    data:any;
    term: any;
  ngOnInit(): void {
    this.getallusers();
    this.getusernotactiv();
  }


  getallusers(){
    this.dataservice.getAllUsers().subscribe(res=>{
      this.data=res;
      this.Users=this.data.utilisateurs;
      console.log(this.Users);

    }
    );
  }

  UserNotActiv:any;
  getusernotactiv(){
    this.dataservice.getusernotactiv().subscribe(res=>{
      this.data=res;
      this.UserNotActiv=this.data.utilisateurs;
      console.log(this.UserNotActiv);
    });

    }




  deleteuser(id){
    this.dataservice.deleteUser(id).subscribe(res=>{
      this.data=res;
      if(this.data.status==1){
        this.getallusers();
      }
      this.ngOnInit();
    }
    );
  }


  ac:any;

    Activate(id){
      this.dataservice.getUserId(id).subscribe(res=>{
        this.data=res;
        this.ac=this.data.utilisateur;
      this.dataservice.updateuseractiv(this.ac.id).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
        
      });
    });
    }


}
