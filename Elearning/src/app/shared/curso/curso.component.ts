import { Component, Input, OnInit } from '@angular/core';
import { ICurso } from 'src/app/interface/icurso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {

    this.curso = {
      id: 1,
      name: 'Angular 10',
      featured: true,
      image: 'http://examen-nh.jcramireztello.com/media/books/angular10.png',
      language: 'es',
      price: 5000.0,
      duration: 40,
      lessons: 7,
      deadline: '2021-01-09',
      students: 20,
      summary: 'Angular es el framework para JavaScript estándapulares para dilarJS. Ahora utilizaremos TypeScel framework.',
      instructor: 1,
      category: 2
  };

  }

}
