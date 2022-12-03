import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCompraComponent } from './remove-compra.component';

describe('RemoveCompraComponent', () => {
  let component: RemoveCompraComponent;
  let fixture: ComponentFixture<RemoveCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
