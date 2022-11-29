import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product!: Product[];
  constructor(private Router: Router,private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }
  private getproducts(){
    this.productService.getProductList().subscribe(data=>{
      this.product = data;
    });
  }
  updateproduct(id:number){
     this.Router.navigate(['update-product',id]);

  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.getproducts();
      // this.Router.navigate(['product-list']);
    })
  }
}
// deleteEmployee(id: number){
//   this.employeeService.deleteEmployee(id).subscribe( data => {
//     console.log(data);
//     this.getEmployees();
//   })