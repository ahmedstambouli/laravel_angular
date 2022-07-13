import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashbordadminRoutingModule } from './dashbordadmin-routing.module';
import { DashbordadminComponent } from './dashbordadmin.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbaradminComponent } from '../navbaradmin/navbaradmin.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  { path: '', component: DashbordadminComponent },
  {path:"Pofile",component:ProfilAdminComponent},
  {path:"Listusers",component:ListusersComponent},
  {path:"Updateuser/:id",component:UpdateuserComponent}
];

@NgModule({
  declarations: [
    DashbordadminComponent,
    ProfilAdminComponent,
    NavbaradminComponent,
    ListusersComponent,
    UpdateuserComponent,
  ],
  imports: [
    CommonModule,
    DashbordadminRoutingModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class DashbordadminModule { }
