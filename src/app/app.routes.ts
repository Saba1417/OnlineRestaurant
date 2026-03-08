import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import path from 'path';
import { CartComponent } from './cart/cart.component';
import { NotfounderrComponent } from './notfounderr/notfounderr.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"menu", component:MenuComponent},
    {path:"cart", component:CartComponent},
    {path:"**", component:NotfounderrComponent}
];
