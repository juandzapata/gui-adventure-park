import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZonasComponent } from './edit-zonas.component';

describe('EditZonasComponent', () => {
  let component: EditZonasComponent;
  let fixture: ComponentFixture<EditZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
