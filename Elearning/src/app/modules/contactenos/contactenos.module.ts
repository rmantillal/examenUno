import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactenosRoutingModule
  ]
})
export class ContactenosModule { }
