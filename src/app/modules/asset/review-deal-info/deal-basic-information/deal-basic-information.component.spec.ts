import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealBasicInformationComponent } from './deal-basic-information.component';

describe('DealBasicInformationComponent', () => {
  let component: DealBasicInformationComponent;
  let fixture: ComponentFixture<DealBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealBasicInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
