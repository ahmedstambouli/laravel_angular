import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DasborduserRoutingModule } from './dasborduser-routing.module';
import { DasborduserComponent } from './dasborduser.component';
import { NavbaruserComponent } from '../navbaruser/navbaruser.component';
import { ProfilComponent } from './profil/profil.component';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  { path: '', component: DasborduserComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  declarations: [
    DasborduserComponent,
    NavbaruserComponent,
    ProfilComponent,
    
  ],
  imports: [
    CommonModule,
    DasborduserRoutingModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    FormsModule, 
    ReactiveFormsModule

  ]
})
export class DasborduserModule { }
