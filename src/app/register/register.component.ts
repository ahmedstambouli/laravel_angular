import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;
  data:any;
  message="";
  alert = ""
  
  
  constructor(private dataservice:DataService) { }
  

  ngOnInit(): void {

    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
     // confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    });

    
  }



  Register(){
    this.form.markAllAsTouched();
    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('password', this.form.value.password);


    this.dataservice.registeruser(formData).subscribe(res=>{
      
      this.data=res;
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
}
