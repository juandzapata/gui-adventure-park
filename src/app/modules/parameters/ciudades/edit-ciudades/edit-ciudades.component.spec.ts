import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCiudadesComponent } from './edit-ciudades.component';

describe('EditCiudadesComponent', () => {
  let component: EditCiudadesComponent;
  let fixture: ComponentFixture<EditCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
