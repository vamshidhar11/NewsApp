import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCenterNavComponent } from './news-center-nav.component';

describe('NewsCenterNavComponent', () => {
  let component: NewsCenterNavComponent;
  let fixture: ComponentFixture<NewsCenterNavComponent>;

  beforeEach(async(() => {
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
