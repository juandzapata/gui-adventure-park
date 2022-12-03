import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasPlanesComponent } from './vistas-planes.component';

describe('VistasPlanesComponent', () => {
  let component: VistasPlanesComponent;
  let fixture: ComponentFixture<VistasPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistasPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistasPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
