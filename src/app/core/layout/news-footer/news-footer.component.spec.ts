import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsFooterComponent } from './news-footer.component';

describe('NewsFooterComponent', () => {
  let component: NewsFooterComponent;
  let fixture: ComponentFixture<NewsFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
