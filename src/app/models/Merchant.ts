export class Merchant{
    

    merchantId:number
    firstName:String
    lastName:String
    company:String
    emailid:String
    mobileno:number
    password:String
    photo:String
    rating:number
    status:string

    constructor(merchantId:number,firstName:String,lastName:String,company:String,
        emailid:String,mobileno:number,password:String,photo:String,rating:number,status:string){
            this.merchantId=null;
            this.firstName=firstName;
            this.lastName=lastName;
            this.company=company;
            this.emailid=emailid;
            this.mobileno=mobileno;
            this.password=password;
            this.photo=photo;
            this.rating=rating;
            this.status=status;
        }
    


}