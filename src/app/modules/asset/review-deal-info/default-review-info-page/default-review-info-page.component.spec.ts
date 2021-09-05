import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultReviewInfoPageComponent } from './default-review-info-page.component';

describe('DefaultReviewInfoPageComponent', () => {
  let component: DefaultReviewInfoPageComponent;
  let fixture: ComponentFixture<DefaultReviewInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultReviewInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultReviewInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
