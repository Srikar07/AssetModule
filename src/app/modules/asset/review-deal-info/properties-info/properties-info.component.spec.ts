import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesInfoComponent } from './properties-info.component';

describe('PropertiesInfoComponent', () => {
  let component: PropertiesInfoComponent;
  let fixture: ComponentFixture<PropertiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
