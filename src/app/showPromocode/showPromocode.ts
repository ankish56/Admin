import {AdminService} from '../service/app.adminService';
import { Component, } from "@angular/core";
import {Promo} from '../models/Promo';
import { Router } from '@angular/router';

@Component({
    selector:'show-promo',
    templateUrl:'showPromocode.html'
})

export class  ShowPromocodeComponent  {


    constructor(private service:AdminService, private route: Router){}
    prom:Promo[]=[];
    promoId:number=0;
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this.service.getPromocodes().subscribe(
            res=>{
               this.prom=res

            },
            err=>{
                alert("an error has occurred")
            }
        )
       }

       addPromocode(){
         this.route.navigate(['addPromocode']);
       }

       deletePromocode(data: number): any {
        this.promoId =  this.prom[data].promocodeId;
       if (this.service.deletePromocode(this.promoId).subscribe( data => {console.log(data);
       },
       error => console.log(error)

       ))
       {
         if (confirm('Are you Sure You Want To Delete')) {
           this.prom.splice(data, 1);
         }
       }
       }


       backtoadmin()
       {
         this.route.navigate(['admin']);
       }
}
