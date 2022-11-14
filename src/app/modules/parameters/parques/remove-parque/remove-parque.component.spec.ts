import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveParqueComponent } from './remove-parque.component';

describe('RemoveParqueComponent', () => {
  let component: RemoveParqueComponent;
  let fixture: ComponentFixture<RemoveParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
