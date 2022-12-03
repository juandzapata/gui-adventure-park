import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParqueComponent } from './view-parque.component';

describe('ViewParqueComponent', () => {
  let component: ViewParqueComponent;
  let fixture: ComponentFixture<ViewParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
