import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  @Input() curso: any[];
  @Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
  }

}
