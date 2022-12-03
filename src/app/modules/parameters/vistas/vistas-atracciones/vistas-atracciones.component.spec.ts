import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasAtraccionesComponent } from './vistas-atracciones.component';

describe('VistasAtraccionesComponent', () => {
  let component: VistasAtraccionesComponent;
  let fixture: ComponentFixture<VistasAtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistasAtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistasAtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
