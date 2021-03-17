import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGrantedComponent } from './access-granted/access-granted.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:RequestAccessComponent},
  {path:'signup',component:SignupComponent},
  {path:'success',component:AccessGrantedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
