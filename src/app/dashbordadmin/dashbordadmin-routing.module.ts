import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordadminComponent } from './dashbordadmin.component';

const routes: Routes = [
  { path: '', component: DashbordadminComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordadminRoutingModule { }
