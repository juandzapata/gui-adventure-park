import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCiudadesComponent } from './remove-ciudades.component';

describe('RemoveCiudadesComponent', () => {
  let component: RemoveCiudadesComponent;
  let fixture: ComponentFixture<RemoveCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
