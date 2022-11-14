import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParqueComponent } from './create-parque.component';

describe('CreateParqueComponent', () => {
  let component: CreateParqueComponent;
  let fixture: ComponentFixture<CreateParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
