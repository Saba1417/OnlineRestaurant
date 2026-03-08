import { Component, EventEmitter, Output } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
constructor(public tools: ToolsService){

}

public spiciness: string = "-1";
public nuts: string = "";
public vegeterian: string = ""

@Output() public transferfilter: EventEmitter<any> = new EventEmitter()

filterProducts() {
    if(this.spiciness == "-1") {
      this.spiciness = ""
    }
    let filterInfo = {
      spiciness : this.spiciness,
      nuts: this.nuts,
      vegeterian: this.vegeterian
    }
    this.transferfilter.emit(filterInfo)
  }
  
 
  reset() {
    this.spiciness = "-1",
    this.nuts = "",
    this.vegeterian = ""
   
  }
}


