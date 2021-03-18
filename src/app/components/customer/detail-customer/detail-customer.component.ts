import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  customerObject: Customer;
  idParam: number;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idParam = Number(this.activatedRoute.snapshot.paramMap.get('customerId'));

    this.customerService.getCustomer(this.idParam).subscribe(data => {
      this.customerObject = data;
    }, error => {
      this.customerObject = this.customerService.customersList[0];
    });

  }

}
