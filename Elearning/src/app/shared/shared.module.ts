import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursosComponent } from '../modules/cursos/listado-cursos/listado-cursos.component';
import { CursoComponent } from './curso/curso.component';



@NgModule({
  declarations: [CursoComponent],
  imports: [
    CommonModule
  ],
  exports: [ListadoCursosComponent]
})
export class SharedModule { }
