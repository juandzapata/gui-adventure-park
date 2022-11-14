import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAtraccionesComponent } from './create-atracciones.component';

describe('CreateAtraccionesComponent', () => {
  let component: CreateAtraccionesComponent;
  let fixture: ComponentFixture<CreateAtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
