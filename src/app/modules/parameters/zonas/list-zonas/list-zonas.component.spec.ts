import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZonasComponent } from './list-zonas.component';

describe('ListZonasComponent', () => {
  let component: ListZonasComponent;
  let fixture: ComponentFixture<ListZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
