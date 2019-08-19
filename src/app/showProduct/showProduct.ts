import { AdminService } from "../service/app.adminService";
import { Component } from "@angular/core";
import { Product } from "../models/Product";
import { Router } from "@angular/router";

@Component({
    selector: 'add-comp',
    templateUrl: 'showProduct.html'
})
 export class ShowProductComponent{
    products1: Product[]=[];
    constructor(private  service: AdminService, private route:Router){}
  status = false;

  merchantId: number;


   object: Product = new Product();


    ngOnInit() {
      this.reloadData();
    }
         reloadData() {
           this.service.getProductsList().subscribe(
             res=>this.products1 = res
           )
         }

         OnUpdateProduct(index: number){

            this.object.productID = this.products1[index].productID;
            this.object.productName = this.products1[index].productName;
            this.object.merchant = this.products1[index].merchant;
            this.merchantId = this.products1[index].merchant.merchantId;
            this.object.tag=this.products1[index].tag;
            this.object.company=this.products1[index].company;
            this.object.description=this.products1[index].description;
            this.object.photo=this.products1[index].photo;
            this.object.quantity =this.products1[index].quantity;
            this.object.category=this.products1[index].category;
            this.object.subcategory=this.products1[index].subcategory;
            this.object.soldQuantities=this.products1[index].soldQuantities;
            this.object.price=this.products1[index].price;
            this.object.releaseDate=this.products1[index].releaseDate;
             this.status = true;
             this.route.navigate(['updateProduct',])
          }
          update() {
            this.service.updateProduct(this.object).subscribe( data => {console.log(data)
              this.service.getProductsList().subscribe(
                res=>this.products1 = res
              )
            },
                error => console.log(error));
                this.status = false;
          }
    goToAddProduct(){
      this.route.navigate(['addProduct']);
    }
    backtoadmin()
    {
      this.route.navigate(['admin']);

    }

  }
