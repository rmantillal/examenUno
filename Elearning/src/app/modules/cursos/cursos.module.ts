import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';


@NgModule({
  declarations: [ListadoCursosComponent, DetalleCursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
