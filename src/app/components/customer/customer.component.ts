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
      console.log(this.listSize);
    })
  }

  addStudent(){
    this.router.navigate(['/students/add']);
  }

  editStudent=(cuIn:Customer)=>{
    this.router.navigate(['/students/edit', cuIn.customerId]);
  }

  deleteStudent=(cuIn:Customer)=>{
    this.customersList = this.customersList.filter(st => st.customerId!==cuIn.customerId);
    this.listSize = this.customersList.length;
    console.log("size: "+this.listSize);

    this.customerService.deleteCustomer(cuIn.customerId).subscribe();
  }

}
