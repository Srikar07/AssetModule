import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTasksCountComponent } from './pending-tasks-count.component';

describe('PendingTasksCountComponent', () => {
  let component: PendingTasksCountComponent;
  let fixture: ComponentFixture<PendingTasksCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTasksCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTasksCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
