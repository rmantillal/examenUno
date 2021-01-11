import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, FooterComponent
  ]
})
export class CoreModule { }
