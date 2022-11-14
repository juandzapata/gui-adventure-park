import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPuestosComponent } from './list-puestos.component';

describe('ListPuestosComponent', () => {
  let component: ListPuestosComponent;
  let fixture: ComponentFixture<ListPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
