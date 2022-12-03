import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleFactorComponent } from './doble-factor.component';

describe('DobleFactorComponent', () => {
  let component: DobleFactorComponent;
  let fixture: ComponentFixture<DobleFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobleFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobleFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
