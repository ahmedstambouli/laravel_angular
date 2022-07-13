import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.getusers();
  }



data:any;
  Users:any;
   k=0;
   j=0;
  useractiv: any = []
  usernotactiv: any = []

  getusers(){
     this.dataservice.getAllUsers().subscribe(res=>{
      this.data=res;
      this.Users=this.data.utilisateurs;
      console.log(this.Users);
      for(let i=0;i<this.Users.length;i++){
        if(this.Users[i].isActive==true){
          this.useractiv[this.j]==this.Users[i];
          this.j++;
        }
        else{
          this.usernotactiv[this.k]==this.Users[i];
          this.k++;
        }
      }
      console.log(this.useractiv);
      console.log(this.usernotactiv);
     });
  }
}
