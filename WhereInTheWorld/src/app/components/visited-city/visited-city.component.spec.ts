import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedCityComponent } from './visited-city.component';

describe('VisitedCityComponent', () => {
  let component: VisitedCityComponent;
  let fixture: ComponentFixture<VisitedCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitedCityComponent]
    });
    fixture = TestBed.createComponent(VisitedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
