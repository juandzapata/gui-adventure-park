import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasParqueComponent } from './vistas-parque.component';

describe('VistasParqueComponent', () => {
  let component: VistasParqueComponent;
  let fixture: ComponentFixture<VistasParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistasParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistasParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
