import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css'
})
export class CustomerDetail {

  route = inject(ActivatedRoute);
  router = inject(Router);
  customerId = 0;
  customer$!: Observable<any>;
  customerService = inject(CustomerService);

  ngOnInit() {
    this.customerId = Number(this.route.snapshot.params['id']);

    if (this.customerId) {
      console.log(this.customerId)
      this.customer$ = this.customerService.getCustomerById(this.customerId);
      console.log(this.customer$)
    };

  }
  backButton() {
    this.router.navigate(['/customer']);
  }
  updateCustomer(form: any) {
    if (form.valid) {
      this.customerService.updateCustomers(this.customerId, form.form.value).subscribe(result => {
        if(result){}
        this.router.navigate(['/customer']);
      });

       }
  }
}


