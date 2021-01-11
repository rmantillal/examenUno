import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoCatContainerComponent } from './components/curso-cat-container/curso-cat-container.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { CursoPageComponent } from './pages/curso-page/curso-page.component';
import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';


@NgModule({
  declarations: [CursoCatContainerComponent, CursoContainerComponent, CursoPageComponent, CursoDetailPageComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
