import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartamentosComponent } from './edit-departamentos.component';

describe('EditDepartamentosComponent', () => {
  let component: EditDepartamentosComponent;
  let fixture: ComponentFixture<EditDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
