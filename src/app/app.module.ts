import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HommeComponent } from './homme/homme.component';
import { NavbarhommeComponent } from './navbarhomme/navbarhomme.component';
import { IsadminGuard } from './guards/isadmin.guard';
import { IsUserGuard } from './guards/is-user.guard';
import { FooterComponent } from './footer/footer.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HommeComponent },
  
  


  { path: 'dashbordadmin', loadChildren: () => import('./dashbordadmin/dashbordadmin.module').then(m => m.DashbordadminModule),canActivate:[AuthGuard,IsadminGuard] },

  { path: 'dashborduser', loadChildren: () => import('./dasborduser/dasborduser.module').then(m => m.DasborduserModule),canActivate:[AuthGuard,IsUserGuard] },
] 


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HommeComponent,
    NavbarhommeComponent,
    FooterComponent,
    StatistiqueComponent,
    NotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
