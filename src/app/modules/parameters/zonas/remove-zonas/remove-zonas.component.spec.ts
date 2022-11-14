import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveZonasComponent } from './remove-zonas.component';

describe('RemoveZonasComponent', () => {
  let component: RemoveZonasComponent;
  let fixture: ComponentFixture<RemoveZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
