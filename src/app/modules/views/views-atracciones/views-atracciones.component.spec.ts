import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAtraccionesComponent } from './views-atracciones.component';

describe('ViewsAtraccionesComponent', () => {
  let component: ViewsAtraccionesComponent;
  let fixture: ComponentFixture<ViewsAtraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsAtraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsAtraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
