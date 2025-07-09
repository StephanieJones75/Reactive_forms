import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css'
})
export class AddCustomer {

  customerService: CustomerService = inject(CustomerService);

  router = inject(Router);

  customer = {
    name: '',
    age: 0,
    department: '',
  }

  submitCustomerForm(form: any) {
    console.log(form);
    if (form.valid) {
      console.log(form.form.value);
      this.customerService.addCustomers(form.form.value).subscribe(params => {
        // console.log(params);
      })

    }


  }

}
