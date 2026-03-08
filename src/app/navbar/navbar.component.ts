import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public renderer: Renderer2){}

  @ViewChild("mobileNav") mobileNav!: ElementRef

  public isShown: boolean = false

  showNav() {
    this.isShown=true
    this.renderer.setStyle(this.mobileNav.nativeElement, "transform", "translateY(0)" )
  }
  hideNav(){
    this.isShown=false
    this.renderer.removeStyle(this.mobileNav.nativeElement, "transform")
  }
}
