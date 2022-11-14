import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZonasComponent } from './create-zonas.component';

describe('CreateZonasComponent', () => {
  let component: CreateZonasComponent;
  let fixture: ComponentFixture<CreateZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
