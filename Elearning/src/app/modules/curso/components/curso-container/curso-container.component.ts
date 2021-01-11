import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {

  listcurso: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
