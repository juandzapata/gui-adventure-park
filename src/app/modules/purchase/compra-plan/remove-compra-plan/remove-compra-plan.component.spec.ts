import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCompraPlanComponent } from './remove-compra-plan.component';

describe('RemoveCompraPlanComponent', () => {
  let component: RemoveCompraPlanComponent;
  let fixture: ComponentFixture<RemoveCompraPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCompraPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCompraPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
