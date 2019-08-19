import {AdminService} from '../service/app.adminService';
import { Component } from '@angular/core';
import {Discount} from '../models/Discount';
import {Product} from '../models/Product';
import { Router } from '@angular/router';

@Component({

  selector: 'add-discount',
  templateUrl: 'addDiscount.html'
})
export class AddDiscountComponent {

  discount1: Discount = new Discount();
  hidden = false;
  productId: number=8;
  products: Product;
  products1: Product[];

    constructor(private service: AdminService, private route:Router) {}





    ngOnInit(): void {

      this.discount1.discountId = 0;
      this.service.getProduct().subscribe(
        res => {
           this.products1 = res;

        },
        err => {
            alert('an error has occurred');
        }
    );

    }


    newDiscount(): void {

    window.location.reload();

    }


    save() {

          this.service
         .findProduct(this.productId)
         .subscribe(products => {
           this.products = products;
          console.log(this.products);
          this.discount1.product = this.products;

          this.service.addDiscount(this.discount1)
           .subscribe(data => console.log(data), error => console.log(error));
         });
    }
    onChange($event){
      this.productId= $event.target.options[$event.target.options.selectedIndex].value;
      console.log(this.productId)
      }

    onSubmit()
    {
        if(this.discount1.startDate <= this.discount1.endDate)
            {
                 this.hidden = true;
                  this.save();

            }
      else
          {
                alert("Start_Date should be less than End_Date");
                window.location.reload;
          }
    }


  backtodiscount()
  {
      this.route.navigate(['showDiscount']);
  }



}
