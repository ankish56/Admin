import { Component, OnInit } from "@angular/core";

import {AdminService} from '../service/app.adminService';
import {Promo} from '../models/Promo';
import { Router } from "@angular/router";

@Component({
    selector:'add-promo',
    templateUrl:'addPromocode.html'
})


export class AddPromoComponent implements OnInit{

    promocodeId:number;
    promocode:string;
    prom:Promo
    constructor(private service:AdminService,private route:Router){}
    ngOnInit(){}

    save()
    {

        var  pro:Promo=new Promo(this. promocodeId,this.promocode);
        console.log(pro);
        this.service.addPromocode(pro).subscribe(
            res=>{
                this.prom = res;
            }
        );
    }
    ch=false;
    change(){
        this.ch=true;
    }

    backtopromoCode(){
      this.route.navigate(['showPromocode']);
    }
}
