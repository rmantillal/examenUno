import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDestacadoContainerComponent } from './cursos-destacado-container.component';

describe('CursosDestacadoContainerComponent', () => {
  let component: CursosDestacadoContainerComponent;
  let fixture: ComponentFixture<CursosDestacadoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDestacadoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDestacadoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
