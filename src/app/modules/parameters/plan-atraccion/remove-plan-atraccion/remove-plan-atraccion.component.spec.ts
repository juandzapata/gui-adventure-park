import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlanAtraccionComponent } from './remove-plan-atraccion.component';

describe('RemovePlanAtraccionComponent', () => {
  let component: RemovePlanAtraccionComponent;
  let fixture: ComponentFixture<RemovePlanAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePlanAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovePlanAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
