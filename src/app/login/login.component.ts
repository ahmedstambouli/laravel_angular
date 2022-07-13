import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;


  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }


  data: any = {};
  message = "";
  testlogin = true;
  testlogin2 = true;
  user: any;
  alert = ""
  token: any;
  jwt: any;
  jwtdecodage: any;

  Login() {
    this.form.markAllAsTouched();
    const formData = new FormData();
    formData.append('email', this.form.value.email);
    formData.append('password', this.form.value.password);

    if (this.form.value.email == "" && this.form.value.password == "") {
      this.message = "email or password is incorrect";
      this.testlogin = false;
      this.alert = "alert alert-danger";
    }
    else {
      this.message = "";
      this.alert = "";
      this.testlogin = true;
    }

    if (this.testlogin = true) {
      this.dataservice.getbyemail(this.form.value.email).subscribe(res => {
        this.data = res;
        console.log(this.data.utilisateurs[0].isActive);
        if (this.data.utilisateurs[0].isActive == 0) {
          console.log("utilisateur non activer");
          this.message = "Your account is not active";
          this.testlogin2 = false;
          this.alert = "alert alert-danger";
        }
        
        else {
          console.log("utilisateur activer");
          this.dataservice.loginuser(formData).subscribe(res => {
            this.data = res
            this.user = this.data.utilisateur;
            console.log(this.user);
            this.token = this.data.data.token;
            const headers = new Headers();
            headers.append('Authorization', `jwt ${this.token}`);
            localStorage.setItem('token', this.token);

            this.jwt = localStorage.getItem('token');
            this.jwtdecodage = jwtDecode(this.jwt);

            if (this.jwtdecodage.role == "admin") {
              this.router.navigate(['/dashbordadmin']);
            }
            else if (this.jwtdecodage.role == "user") {
              this.router.navigate(['/dashborduser']);
            }
          });
        }

        if (this.data.utilisateurs[0].email != this.form.value.email || this.data.utilisateurs[0].password != this.form.value.password) {
          this.message = "email or password is incorrect";
          this.testlogin2 = false;
          this.alert = "alert alert-danger";
        }
        else {
          this.message = "";
          this.alert = "";
          this.testlogin2 = true;
        }

      

      });
      
     
      }
    }
  

}
