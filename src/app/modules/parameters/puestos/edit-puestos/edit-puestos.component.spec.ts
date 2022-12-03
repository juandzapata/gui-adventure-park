import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPuestosComponent } from './edit-puestos.component';

describe('EditPuestosComponent', () => {
  let component: EditPuestosComponent;
  let fixture: ComponentFixture<EditPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPuestosComponent ]
    })
    .compileComponents();

    
    fixture = TestBed.createComponent(EditPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
