import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompraPlanComponent } from './create-compra-plan.component';

describe('CreateCompraPlanComponent', () => {
  let component: CreateCompraPlanComponent;
  let fixture: ComponentFixture<CreateCompraPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompraPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompraPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
