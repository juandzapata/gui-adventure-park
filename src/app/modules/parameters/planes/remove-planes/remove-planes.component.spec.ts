import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlanesComponent } from './remove-planes.component';

describe('RemovePlanesComponent', () => {
  let component: RemovePlanesComponent;
  let fixture: ComponentFixture<RemovePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
