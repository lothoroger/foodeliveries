import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent} from './components/change-password/change-password.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path:"" , redirectTo:"/home", pathMatch:"full"},
  { path:"home" , component:HomeComponent},
  { path:"register" , component:RegisterComponent},
  { path: "login", component:LoginComponent},
  { path: "products", component:ProductsComponent},
  { path: "changepwd", component:ChangePasswordComponent},
  { path: "payment", component:PaymentComponent},
 { path: "orders", component:OrdersComponent},
  { path: "cart", component: CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
