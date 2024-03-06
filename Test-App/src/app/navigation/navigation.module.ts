import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    RouterOutlet,
    RouterLink
  ]
})
export class NavigationModule { }
