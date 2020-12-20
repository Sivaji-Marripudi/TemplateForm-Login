import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomepageComponent } from './welcomepage.component';
import { CreateAccountComponent } from 'src/app/components/create-account/create-account.component';
import { ForgottenComponent } from 'src/app/components/forgotten/forgotten.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { FormsModule,NgForm } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes,RouterModule } from "@angular/router";
import { NavComponent } from 'src/app/components/shared/nav/nav.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { FiltersComponent } from 'src/app/components/shopping-cart/filters/filters.component';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from 'src/app/components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from 'src/app/components/shopping-cart/product-list/product-item/product-item.component';


const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'create',component:CreateAccountComponent},
  {path:'forgot',component:ForgottenComponent}
];

@NgModule({
  declarations: [
    WelcomepageComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgottenComponent,
    DashboardComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,FormsModule,MaterialModule,FlexLayoutModule,RouterModule.forChild(routes)
  ]

})
export class WelcomepageModule {}