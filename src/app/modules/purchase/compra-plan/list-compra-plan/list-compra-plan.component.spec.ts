import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompraPlanComponent } from './list-compra-plan.component';

describe('ListCompraPlanComponent', () => {
  let component: ListCompraPlanComponent;
  let fixture: ComponentFixture<ListCompraPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompraPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompraPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
