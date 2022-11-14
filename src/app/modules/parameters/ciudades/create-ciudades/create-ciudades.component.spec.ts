import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCiudadesComponent } from './create-ciudades.component';

describe('CreateCiudadesComponent', () => {
  let component: CreateCiudadesComponent;
  let fixture: ComponentFixture<CreateCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
