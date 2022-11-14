import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParqueComponent } from './list-parque.component';

describe('ListParqueComponent', () => {
  let component: ListParqueComponent;
  let fixture: ComponentFixture<ListParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
