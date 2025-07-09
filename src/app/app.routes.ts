import { Routes } from '@angular/router';
import { AddCustomer } from './add-customer/add-customer';
import { Signin } from './signin/signin';
import { SignUp } from './signup/signup';
import { Customer } from './customer/customer';
import { PageNotFound } from './page-not-found/page-not-found';
import { CustomerDetail } from  './customer-detail/customer-detail';
import { Houses } from './houses/houses';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    
    {
        path: 'signin',
        component: Signin
    },
    {
        path: 'signup',
        component: SignUp
    },
    {
        path: 'customer',
        component: Customer
    },
    {
        path: 'customer/:id',
        component: CustomerDetail
    },
    {
        path: 'add-customer',
        component: AddCustomer
    },
    {
        path: 'housing',
        component: Houses
    },
    {
    path: 'protected',
    component: Customer,
    canActivate: [AuthGuard] // Apply the AuthGuard here
  },
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFound
    },

];
