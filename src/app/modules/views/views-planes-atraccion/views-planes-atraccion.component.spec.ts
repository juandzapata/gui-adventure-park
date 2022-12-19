import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPlanesAtraccionComponent } from './views-planes-atraccion.component';

describe('ViewsPlanesAtraccionComponent', () => {
  let component: ViewsPlanesAtraccionComponent;
  let fixture: ComponentFixture<ViewsPlanesAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsPlanesAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsPlanesAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
