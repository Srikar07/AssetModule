import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealStatisticsWidgetComponent } from './deal-statistics-widget.component';

describe('DealStatisticsWidgetComponent', () => {
  let component: DealStatisticsWidgetComponent;
  let fixture: ComponentFixture<DealStatisticsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealStatisticsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealStatisticsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
