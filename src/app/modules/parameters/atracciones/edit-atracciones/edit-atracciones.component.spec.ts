import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtraccionesComponent } from './edit-atracciones.component';

describe('EditAtraccionesComponent', () => {
  let component: EditAtraccionesComponent;
  let fixture: ComponentFixture<EditAtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
