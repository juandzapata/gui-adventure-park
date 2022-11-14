import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDepartamentosComponent } from './remove-departamentos.component';

describe('RemoveDepartamentosComponent', () => {
  let component: RemoveDepartamentosComponent;
  let fixture: ComponentFixture<RemoveDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
