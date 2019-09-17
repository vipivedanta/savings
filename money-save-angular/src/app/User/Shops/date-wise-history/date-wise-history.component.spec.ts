import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseHistoryComponent } from './date-wise-history.component';

describe('DateWiseHistoryComponent', () => {
  let component: DateWiseHistoryComponent;
  let fixture: ComponentFixture<DateWiseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateWiseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
