import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'product-list', component:ProductListComponent},
  {path: '', redirectTo:'product-list', pathMatch: 'full'},
  {path: 'create-product', component:CreateProductComponent},
  {path: 'update-product/:id', component:UpdateProductComponent},
  {path: 'feedback-list', component:FeedbackListComponent},
  {path: 'create-feedback', component:CreateFeedbackComponent},
  {path: 'update-feedback/:id', component:UpdateFeedbackComponent}
];
// const routes: Routes = [
//   {path: 'employees', component: EmployeeListComponent},
//   {path: 'create-employee', component: CreateEmployeeComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
//   {path: 'update-employee/:id', component: UpdateEmployeeComponent},
//   {path: 'employee-details/:id', component: EmployeeDetailsComponent}
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
