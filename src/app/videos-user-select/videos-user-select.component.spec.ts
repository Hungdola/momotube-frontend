import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUserSelectComponent } from './videos-user-select.component';

describe('VideosUserSelectComponent', () => {
  let component: VideosUserSelectComponent;
  let fixture: ComponentFixture<VideosUserSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosUserSelectComponent]
    });
    fixture = TestBed.createComponent(VideosUserSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
