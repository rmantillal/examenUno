import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorContainerComponent } from './instructor-container.component';

describe('InstructorContainerComponent', () => {
  let component: InstructorContainerComponent;
  let fixture: ComponentFixture<InstructorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
