import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCatContainerComponent } from './curso-cat-container.component';

describe('CursoCatContainerComponent', () => {
  let component: CursoCatContainerComponent;
  let fixture: ComponentFixture<CursoCatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoCatContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
