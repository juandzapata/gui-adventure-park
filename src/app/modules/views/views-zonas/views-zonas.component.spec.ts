import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsZonasComponent } from './views-zonas.component';

describe('ViewsZonasComponent', () => {
  let component: ViewsZonasComponent;
  let fixture: ComponentFixture<ViewsZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
