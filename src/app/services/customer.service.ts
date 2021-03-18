import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, servicesNames } from '../../environments/environment';
import { Customer } from '../models/customer';


@Injectable({
    providedIn: 'root'
})
export class CustomerService{
    url:string = environment.url;
    private headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


    customersList: Customer[] = [
        {
            customerId: 1,
            salutation: "Mr.",
            firstName: "Paul",
            lastName: "Mitchell",
            addressLine1: "1222 56th St S",
            addressLine2: "apt 23",
            city: "Fargo",
            state: "ND",
            zipCode: "58104",
            emailAddress: "ash@sample.com",
            telePhoneNumber: "5551345699"
        }
    ]




    constructor(private http: HttpClient) {

    }

    saveCustomer(customer: Customer) {
        return this.http.post(this.url + servicesNames.customers, customer, this.headers);
    }

    updateCustomer(id: number,customer: Customer) {
        return this.http.put(this.url + servicesNames.customers + "/" +id, customer, this.headers);
    }

    deleteCustomer(id: any){
        return this.http.delete(this.url + servicesNames.customers + "/" +id, this.headers)
    }

    getCustomer(id: number): Observable<Customer>{
        return this.http.get<Customer>(this.url + servicesNames.customers + "/" +id, this.headers);
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.url + servicesNames.customers);
    }



}
