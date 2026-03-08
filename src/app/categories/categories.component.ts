import { Component, EventEmitter, Output, } from '@angular/core';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
constructor(public tools: ToolsService){
  this.getCategories()
}

public categories:any;

@Output() public transfer: EventEmitter<any> = new EventEmitter();

showByCategory(id: any) {
  this.tools.getProductsByCategory(id).subscribe({
    next: (data) => {this.transfer.emit(data)},
    error: (err) => alert('Error loading category products: ' + (err.error?.message || err.message || JSON.stringify(err)))
  });
}


getCategories(){
  this.tools.getCategories().subscribe({
    next: (data:any) => {this.categories=data},
    error: (err) => alert('Error loading categories: ' + (err.error?.message || err.message || JSON.stringify(err)))
  })
}


}
