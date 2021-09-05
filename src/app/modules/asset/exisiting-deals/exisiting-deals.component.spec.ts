import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExisitingDealsComponent } from './exisiting-deals.component';

describe('ExisitingDealsComponent', () => {
  let component: ExisitingDealsComponent;
  let fixture: ComponentFixture<ExisitingDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExisitingDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExisitingDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
