import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {

  constructor(private dataservice:DataService) { }
token:any;
data:any;
user:any;
id:any;
alert:any;
message:any;
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



  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
messageEmail:any;
messagename:any;
messagepassword:any;
testEmail=false;
testName=false;
testpassword=false;
updateuser(){

  //verif Email
  if((this.User.email=='') ||(this.User.email.indexOf('@')==-1) || (this.User.email.indexOf('.')==-1)||(this.User.email.match(this.validRegex)==null)){
    this.messageEmail='verif your Email'
    this.testEmail=true
    this.alert='alert alert-danger'
    this.message='Please verif in the input'
  }
  else{
    this.testEmail=false
    this.messageEmail=''
    this.alert=''
    this.message=''
    
  }


  //verf name
  if(this.User.name==''){
    this.messagename='verif your name'
    this.alert='alert alert-danger'
    this.testEmail=true

  }
  else{
    this.testEmail=false
    this.messagename=''
    this.alert=''
  }


  //verif password
  if(this.User.password=='' || this.User.password.length<6){
    this.messagepassword='verif your password'
    this.alert='alert alert-danger'
    this.testpassword=true
  }
  else{
    this.testpassword=false
    this.messagepassword=''
    this.alert=''
  }


  if(this.testEmail==false && this.testName==false && this.testpassword==false){
  this.dataservice.updateUser(this.User,this.id).subscribe(res=>{
    this.data=res;

    if(this.data.status==1){
        this.alert="alert alert-success";
        this.message=this.data.message;
      }
      else{
        this.alert="alert alert-danger";
        this.message=this.data.message;
        
      }
    this.ngOnInit();
  }
  );
  }
  else{
    this.message='Please verif in the input'
  }
}
}
