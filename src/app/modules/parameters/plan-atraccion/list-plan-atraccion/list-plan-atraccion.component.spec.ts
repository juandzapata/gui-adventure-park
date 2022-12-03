import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanAtraccionComponent } from './list-plan-atraccion.component';

describe('ListPlanAtraccionComponent', () => {
  let component: ListPlanAtraccionComponent;
  let fixture: ComponentFixture<ListPlanAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
