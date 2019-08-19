import {AdminService} from '../service/app.adminService';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/User';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'show-user',
    templateUrl: 'showUser.html'
})

export class ShowUserComponent {
    constructor(private service: AdminService, private route:Router) {}
    user: User[] = [];
    userId:number;
    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit(): void {
        this.service.getUser().subscribe(
            res => {
               this.user = res;

            },
            err => {
                alert('an error has occurred');
            }
        );
        this.userId = 0;
       }

       deleteUser(data: number): any {
        this.userId =  this.user[data].userId;
       if (this.service.deleteUser(this.userId).subscribe( data => {console.log(data);
       },
       error => console.log(error)

       ))
       {
         if (confirm('Are you Sure You Want To Delete')) {
           this.user.splice(data, 1);
         }
       }
      }

      backtoadmin()
      {
        this.route.navigate(['admin']);

      }


}
