import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartamentosComponent } from './create-departamentos.component';

describe('CreateDepartamentosComponent', () => {
  let component: CreateDepartamentosComponent;
  let fixture: ComponentFixture<CreateDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
