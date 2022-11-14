import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParqueComponent } from './edit-parque.component';

describe('EditParqueComponent', () => {
  let component: EditParqueComponent;
  let fixture: ComponentFixture<EditParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
