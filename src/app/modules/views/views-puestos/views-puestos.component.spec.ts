import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPuestosComponent } from './views-puestos.component';

describe('ViewsPuestosComponent', () => {
  let component: ViewsPuestosComponent;
  let fixture: ComponentFixture<ViewsPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsPuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
