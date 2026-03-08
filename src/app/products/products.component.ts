import { Component } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { RouterModule, Router } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { FormsModule } from '@angular/forms';
import { FilterComponent } from "../filter/filter.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [RouterModule, CategoriesComponent, FormsModule, FilterComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(public tools: ToolsService, private router: Router){
  this.showAll();
  this.showcategories();
 
}

public allProducts: any
public categories: any
public Quantity: string = "1";

get isMenuPage(): boolean {
  return this.router.url === '/menu';
}

showAll(){
  this.tools.getAllProducts().subscribe({
    next: (data:any) => {this.allProducts=data},
    error: (err) => alert('Error loading products: ' + (err.error?.message || err.message || JSON.stringify(err)))
  })
}
showcategories(){
  this.tools.getCategories().subscribe({
    next: (data:any) => {this.categories=data},    
    error: (err) => alert('Error loading categories: ' + (err.error?.message || err.message || JSON.stringify(err)))   
  })
}

showByCategory(id: number) {
  this.tools.getProductsByCategory(id).subscribe({
    next: (data:any) => {this.allProducts=data.products},
    error: (err) => alert('Error loading category products: ' + (err.error?.message || err.message || JSON.stringify(err)))  
  })
}

showProductsByCat(list:any) {
  this.allProducts = list.products
}

addtocart(item:any){
  let cartinfo = {
  quantity: 1,
  price: item.price,
  productId: item.id
  }
  this.tools.addToCart(cartinfo).subscribe({
    next: (data:any) => {alert("Product added to cart successfully")},
    error: (err) => alert('Error adding to cart: ' + (err.error?.message || err.message || JSON.stringify(err)))  
  });
}

getFilteredData(filterData: any) {
  this.tools.filterProducts(filterData.vegeterian, filterData.nuts, filterData.spiciness).subscribe({
    next: (data:any) => {this.allProducts=data},
    error: (err) => alert('Error filtering products: ' + (err.error?.message || err.message || JSON.stringify(err)))
  })
  
}


}
