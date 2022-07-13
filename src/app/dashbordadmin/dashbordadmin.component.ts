import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbordadmin',
  templateUrl: './dashbordadmin.component.html',
  styleUrls: ['./dashbordadmin.component.css']
})
export class DashbordadminComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  form: any;
  data:any;
  message="";
  alert = ""
  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      role:new FormControl('',Validators.required)
     // confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    });

    this.getallusers();
    this.getusernotactiv();



    
  }

  Register(){
    this.form.markAllAsTouched();
    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('password', this.form.value.password);
    formData.append('role', this.form.value.role);


    this.dataservice.registeruser(formData).subscribe(res=>{
      this.data=res;
      console.log(this.form.value);
      console.log(this.data);
      
      if(this.data.status==1){
        this.alert="alert alert-success";
        this.message=this.data.message;
      }
      else{
        this.alert="alert alert-danger";
        this.message=this.data.message;
        
      }

      

  });

  }

Users:any;
user:any;
  getallusers(){
    this.dataservice.getAllUsers().subscribe(res=>{
      this.data=res;
      this.Users=this.data.utilisateurs;
      this.user=this.Users.length
      console.log(this.Users.length);

    }
    );
  }


  UserNotActiv:any;
  usernot:any;
  getusernotactiv(){
    this.dataservice.getusernotactiv().subscribe(res=>{
      this.data=res;
      this.UserNotActiv=this.data.utilisateurs;
      this.usernot=this.UserNotActiv.length
      console.log(this.UserNotActiv);
    });

    }

}
