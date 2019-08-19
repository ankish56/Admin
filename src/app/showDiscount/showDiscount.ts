import {AdminService} from '../service/app.adminService';
import { Component } from '@angular/core';
import {Discount} from '../models/Discount';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'show-discount',
    templateUrl: 'showDiscount.html'
})

export class ShowDiscountComponent {
    constructor(private service: AdminService, private route:Router) {}
    discount: Discount[] = [];
    newdiscount:Discount = new Discount();
    discountId: number;
    showUpdate:boolean=false;
    hasUpdated:boolean=false;
    updatedIndex:number;
    discountvalue:number;
    sdate:Date;
    edate:Date;



    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit(): void {
        this.service.getDiscount().subscribe(
            res => {
               this.discount = res;

            },
            err => {
                alert('an error has occurred');
            }
        );

        this.discountId = 0;
       }


       deleteDiscount(data: number): any {
         this.discountId =  this.discount[data].discountId;
        if (this.service.deleteDiscount(this.discountId).subscribe( data => {console.log(data);
        },
        error => console.log(error)

        ))
        {
          if (confirm('Are you Sure You Want To Delete')) {
            this.discount.splice(data, 1);
          }
        }
       }

backtoadmin()
{
  this.route.navigate(['admin']);

}
gotoadddiscount(){
  this.route.navigate(['addDiscount']);
}


updateDiscount(index:number){
  this.showUpdate=true
  this.updatedIndex = index

  this.discountvalue = this.discount[index].discount
  this.sdate = this.discount[index].startDate
  this.edate=this.discount[index].endDate
  //this.account = {id:this.id,phone:this.phone,accountHolder:this.name,balance:this.balance}
}

update(){

  this.discount[this.updatedIndex].discount = this.discountvalue
  this.discount[this.updatedIndex].startDate = this.sdate
  this.discount[this.updatedIndex].endDate = this.edate

  this.newdiscount.discountId=this.discount[this.updatedIndex].discountId;
  this.newdiscount.discount=this.discountvalue;
  this.newdiscount.startDate=this.sdate;
  this.newdiscount.endDate=this.edate;
  this.newdiscount.product=this.discount[this.updatedIndex].product;


  if(this.service.updateDiscount(this.newdiscount).subscribe()&&this.sdate<=this.edate)
  {
    this.hasUpdated=true;
  }
  else{
       alert("Start_Date should be less than End_Date");
  }





}

refresh()
{
  window.location.reload();
}



}
