import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPlanesComponent } from './views-planes.component';

describe('ViewsPlanesComponent', () => {
  let component: ViewsPlanesComponent;
  let fixture: ComponentFixture<ViewsPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
