import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePuestosComponent } from './remove-puestos.component';

describe('RemovePuestosComponent', () => {
  let component: RemovePuestosComponent;
  let fixture: ComponentFixture<RemovePuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovePuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
