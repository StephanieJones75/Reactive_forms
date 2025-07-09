import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CustomerService } from '../customer-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

  customerService = inject(CustomerService);
  customers$!: Observable<any>;

  // customers = {}
  ngOnInit() {
    this.getCustomers()
  }
  delCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(params => {
      this.getCustomers()

    });

  }
  getCustomers() {
    this.customers$ = this.customerService.getCustomers()
  }
}

