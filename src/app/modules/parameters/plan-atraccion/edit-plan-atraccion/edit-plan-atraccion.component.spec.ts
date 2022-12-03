import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanAtraccionComponent } from './edit-plan-atraccion.component';

describe('EditPlanAtraccionComponent', () => {
  let component: EditPlanAtraccionComponent;
  let fixture: ComponentFixture<EditPlanAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlanAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlanAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
