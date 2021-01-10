import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleCursosComponent
  },  {
    path: '',
    component: ListadoCursosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
