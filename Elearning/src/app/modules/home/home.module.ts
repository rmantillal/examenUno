import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CursosDestacadoContainerComponent } from './components/cursos-destacado-container/cursos-destacado-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';


@NgModule({
  declarations: [HeaderComponent, CursosDestacadoContainerComponent, InstructorComponent, InstructorContainerComponent, InicioComponent, HomeHeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
