import {AdminService} from '../service/app.adminService';
import { Component } from '@angular/core';
import {Merchant} from '../models/Merchant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getall-merchant',
  templateUrl: './app.getAllMerchant.html'
})
export class GetAllMerchantComponent  {

  constructor(private service: AdminService, private router: Router) {
    this.getAllMerchant();
  }

  ngOnInit() {
  }



  merchantList: Merchant[] = [];
  merchantObject:Merchant;
  messageResponse: string;

  getAllMerchant(): any {
    this.service.getAllMerchantsList()
      .subscribe((result) => {
        //alert("Status Code: " + result.statusCode + "\n" + result.message);
        //this.merchantList[0].merchantId=result.merchantsList[0].merchantId;

        //console.log("Id:  "+result.merchantsList[0])
        //console.log("Id:  "+result.merchantsList[0].merchantId)
        //this.merchantList = result.merchantsList;



        result.merchantsList.forEach(element => {
          this.merchantList.push(element)
        });

        console.log(this.merchantList)
      }

      )
  }

  deleteMerchant(merchantObject:Merchant){
    var merchantId=merchantObject.merchantId;
    console.log(merchantId)
    if(confirm("Are You Sure You want to Delete"))
        this.service.deleteMerchant(merchantId).subscribe((result) => {
          alert("Status Code: " + result.statusCode + "\n" + result.message);

        }
        )
        window.location.reload();
  }

  gotoaddmerchant(){
    this.router.navigate(['addMerchant']);
  }

  backtoadmin()
{
  this.router.navigate(['admin']);

}
}

