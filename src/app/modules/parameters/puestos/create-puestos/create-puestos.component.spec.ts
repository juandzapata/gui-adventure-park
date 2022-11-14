import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuestosComponent } from './create-puestos.component';

describe('CreatePuestosComponent', () => {
  let component: CreatePuestosComponent;
  let fixture: ComponentFixture<CreatePuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
