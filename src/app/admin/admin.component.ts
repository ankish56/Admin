import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'admin',
  templateUrl: 'admin.component.html'
})
// tslint:disable-next-line: component-class-suffix
export class Admin {

  constructor(private router:Router) {}

}

