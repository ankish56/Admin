import {Router, RouterModule, Routes} from '@angular/router'

import { AddDiscountComponent } from './addDiscount/addDiscount';
import { AddMerchantComponent } from './AddMerchant/app.addMerchant';
import { AddProductComponent } from './addproduct/addProduct';
import { AddPromoComponent } from './addPromocode/addPromocode';
import {Admin} from './admin/admin.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {GetAllMerchantComponent} from './showMerchant/app.getAllMerchant';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ShowDiscountComponent} from './showDiscount/showDiscount';
import {ShowProductComponent} from './showProduct/showProduct';
import { ShowPromocodeComponent } from './showPromocode/showPromocode';
import {ShowUserComponent} from './showUser/showUser';

const routes:Routes=[{path:'',redirectTo:'admin',pathMatch:'full'},
  {path:'showUser',component:ShowUserComponent},
{path:'admin',component:Admin},
{path:'showMerchant',component:GetAllMerchantComponent},
{path:'addProduct',component:AddProductComponent},
{path:'showProduct',component:ShowProductComponent},
{path:'showDiscount',component:ShowDiscountComponent},
{path:'addDiscount',component:AddDiscountComponent},
{path:'showPromocode',component:ShowPromocodeComponent},
{path:'addMerchant',component:AddMerchantComponent},
{path:'addPromocode',component:AddPromoComponent},


];
@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),
        FormsModule,HttpClientModule

    ],
    declarations: [
        AppComponent, ShowUserComponent, AddProductComponent,AddPromoComponent, GetAllMerchantComponent, ShowProductComponent, ShowDiscountComponent, AddDiscountComponent, ShowPromocodeComponent, AddMerchantComponent , Admin],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }
