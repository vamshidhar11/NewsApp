import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsCenterNavComponent } from './news-center-nav.component';

describe('NewsCenterNavComponent', () => {
  let component: NewsCenterNavComponent;
  let fixture: ComponentFixture<NewsCenterNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCenterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCenterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
