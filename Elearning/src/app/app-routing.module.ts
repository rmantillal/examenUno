import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },  {
    path: '',
    loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule)
  },  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },  {
    path: '',
    loadChildren: () => import('./modules/contactenos/contactenos.module').then(m => m.ContactenosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
