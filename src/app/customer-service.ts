import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  static getCustomerById(customerId: number): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  http: HttpClient = inject(HttpClient);

  token = localStorage.getItem('token');

  getCustomerById(customer_id:number) {
    const headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': this.token ? this.token : '' });
    const options = { headers: headers };
    return this.http.get(`http://localhost:3000/customers/${customer_id}`, options);
  }

  // For static data
  // getCustomerById(customer_id:number){
  //   let customer = this.customers.find((customer) => customer.id == customer_id)
  //   console.log(customer);
  //   return customer;
  // }

  getCustomers() {

    const headers = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': this.token ? this.token : '' });
    const options = { headers: headers };
    return this.http.get('http://localhost:3000/customers/', options);
  }

  addCustomers(data: any) {
    return this.http.post('http://localhost:3000/customers/', data);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`http://localhost:3000/delete_customers/${id}`)
  }

  updateCustomers(id: number, data: any) {
    return this.http.post('http://localhost:3000/update_customers/${id}', data);

  }
  loginService(data: any) {
    return this.http.post('http://localhost:3000/customers/', data);
  }
}