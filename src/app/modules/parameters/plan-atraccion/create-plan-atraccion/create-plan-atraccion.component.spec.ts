import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanAtraccionComponent } from './create-plan-atraccion.component';

describe('CreatePlanAtraccionComponent', () => {
  let component: CreatePlanAtraccionComponent;
  let fixture: ComponentFixture<CreatePlanAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlanAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
