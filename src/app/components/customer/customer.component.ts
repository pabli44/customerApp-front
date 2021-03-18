import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {
  customersList: Customer[];
  listSize: number;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customersList = data;
      this.listSize = this.customersList.length;
    }, error => {
      this.customersList = this.customerService.customersList;
      this.listSize = this.customersList.length;
    })
  }

}
