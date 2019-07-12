import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoticeDetailComponent } from './view-notice-detail.component';

describe('ViewNoticeDetailComponent', () => {
  let component: ViewNoticeDetailComponent;
  let fixture: ComponentFixture<ViewNoticeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoticeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNoticeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
