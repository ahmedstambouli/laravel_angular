import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasborduserComponent } from './dasborduser.component';

const routes: Routes = [{ path: '', component: DasborduserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasborduserRoutingModule { }
