import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent} from './components/change-password/change-password.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
const routes: Routes = [
  { path:"" , redirectTo:"/home", pathMatch:"full"},
  { path:"home" , component:HomeComponent},
  { path:"register" , component:RegisterComponent},
  { path: "login", component:LoginComponent},
  { path: "changepwd", component:ChangePasswordComponent},
  { path: "customers", component:CustomersComponent},
  { path: "cuisine", component:CuisineComponent},
  { path: "**", redirectTo:"/home",pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
