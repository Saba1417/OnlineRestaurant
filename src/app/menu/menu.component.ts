import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../categories/categories.component";


@Component({
  selector: 'app-menu',
  imports: [ProductsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
