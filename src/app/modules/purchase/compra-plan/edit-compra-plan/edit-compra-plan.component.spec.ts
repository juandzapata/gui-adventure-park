import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompraPlanComponent } from './edit-compra-plan.component';

describe('EditCompraPlanComponent', () => {
  let component: EditCompraPlanComponent;
  let fixture: ComponentFixture<EditCompraPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompraPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCompraPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
