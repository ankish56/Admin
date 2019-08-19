import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, from} from 'rxjs';

import { Discount } from '../models/Discount';
import { Injectable } from '@angular/core';
import { Merchant } from '../models/Merchant';
import { Product } from '../models/Product';
import {Promo} from '../models/Promo';
import { User } from '../models/User';

// tslint:disable-next-line: prefer-const
let baseUrl = 'http://localhost:3000/admin';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
    constructor(private http: HttpClient) {}


//------------------------------------------------user-----------------------------------------------------------------------------------------------------------------
    getUser() {
          return this.http.get<User[]>(baseUrl + '/AllUsers');
    }

    deleteUser(userId: number ) {
      return this.http.delete(`${baseUrl}/deleteUser/${userId}`);
    }



//----------------------------------------------------Merchant---------------------------------------------------------------------------------------------------------------


    findByEmail(email:String):Observable<any>{

      return this.http.get(baseUrl+"/find/"+email);
  }


  getAllMerchantsList():Observable<any>{
    return this.http.get(baseUrl+"/AllMerchants");
  }

  addNewMerchant(data:Merchant):Observable<any>{
    let options = { "headers":
                new HttpHeaders({ "Content-Type": "application/json" }) };
                return this.http.post(baseUrl+"/new/",data,options);

  }
  deleteMerchant(merchantId:number):Observable<any>{
    console.log("In service delete"+merchantId)
     return this.http.delete(baseUrl+"/delete/"+merchantId);
  }


  updateMerchantDetails(data:Merchant):Observable<any>{
    let options = { "headers":
    new HttpHeaders({ "Content-Type": "application/json" }) };

     return this.http.put(baseUrl+"/update",data,options);
  }




//--------------------------------------------------------------------Product--------------------------------------------------------------------------------------------------------


    deleteProduct(productId: number ) {
      return this.http.delete(`${baseUrl}/deleteProduct/${productId}`);
    }

    getProductsList(): Observable<Product[]> {
      return this.http.get<Product[]>(`${baseUrl}`  + `/products/all`);
    }

    array: any[] = [];

    createProduct(product: Product): Observable<any> {
      console.log("add")
      return this.http.post<any>(baseUrl+"/products/add", product);
    }


    getMerchant(merchantId: number): Observable<Merchant>{
      return this.http.get<Merchant>(baseUrl+"/products/getmerchantbyid/"+merchantId);
    }

    updateProduct(product: Product): Observable<any> {
     return this.http.put<any>(baseUrl+"/products/update", product);

    }



//-------------------------------------------------------------------Discount-------------------------------------------------------------------------------------------------------------------------------------

    getDiscount() {
      return this.http.get<Discount[]>(baseUrl + "/AllDiscounts");
      }

    deleteDiscount(discountId: number ) {
     return this.http.delete(`${baseUrl}/deleteDiscount/${discountId}`);
   }

   addDiscount(discount2: Discount): Observable<Object> {
    return this.http.post(`${baseUrl}/addDiscount`, discount2);
  }

  updateDiscount(discount2: Discount): Observable<Object> {
    return this.http.put(`${baseUrl}/updateDiscount`, discount2);
  }


//=======================================Required for Discount module==========================================================
  findProduct(productId: number ) : Observable<any> {
    return this.http.get(`${baseUrl}/findProduct/${productId}`);
  }
  getProduct() {
    return this.http.get<Product[]>(baseUrl + "/AllProducts");
  }
//=======================================Required for Discount module==========================================================



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//---------------------------------------------------------PromoCodes-------------------------------------------------------------------------------------------------------

acc:Promo;
    addPromocode(pro: Promo) :Observable<Promo>
    {

         return this.http.post<Promo>(baseUrl+ "/addPromocode",pro);
    }

    getPromocodes()
    {
          return this.http.get<Promo[]>(baseUrl+"/AllPromocodes");
    }

    deletePromocode(promocodeId:number)
    {

        return this.http.delete<Promo>(baseUrl+"/deletePromoCode/"+promocodeId);

    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

}

