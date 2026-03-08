import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
