import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(public api: HttpClient) { }

  getCategories() {
    return this.api.get(this.baseUrl + "categories/")
  }

  getAllProducts() {
    return this.api.get(this.baseUrl + "menu-items/")
  }

  getProductsByCategory(id: number) {
    return this.api.get(this.baseUrl + `menu-items/?category=${id}`)
  }

  getCartItems() {
    return this.api.get(this.baseUrl + "orders/")
  }

  updateCartItem(id: number, body: any) {
    return this.api.put(this.baseUrl + "order-items/" + id + "/", body)
  }

  addToCart(cart: any) {
    return this.api.post(this.baseUrl + "orders/", cart)
  }

  deleteCartItem(id: number) {
    return this.api.delete(this.baseUrl + `order-items/${id}/`)
  }

  filterProducts(vegeterian: boolean, nuts: boolean, spicy: number) {
    return this.api.get(this.baseUrl + `menu-items/?vegetarian=${vegeterian}&nuts_free=${nuts}&spiciness=${spicy}`)
  }

}
