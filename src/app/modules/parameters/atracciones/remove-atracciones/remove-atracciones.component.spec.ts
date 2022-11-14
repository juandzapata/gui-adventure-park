import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAtraccionesComponent } from './remove-atracciones.component';

describe('RemoveAtraccionesComponent', () => {
  let component: RemoveAtraccionesComponent;
  let fixture: ComponentFixture<RemoveAtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
