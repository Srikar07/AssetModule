import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemainingDealsComponent } from './show-remaining-deals.component';

describe('ShowRemainingDealsComponent', () => {
  let component: ShowRemainingDealsComponent;
  let fixture: ComponentFixture<ShowRemainingDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRemainingDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRemainingDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
