import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsParquesComponent } from './views-parques.component';

describe('ViewsParquesComponent', () => {
  let component: ViewsParquesComponent;
  let fixture: ComponentFixture<ViewsParquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsParquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsParquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
