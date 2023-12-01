import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTrinhdienComponent } from './video-trinhdien.component';

describe('VideoTrinhdienComponent', () => {
  let component: VideoTrinhdienComponent;
  let fixture: ComponentFixture<VideoTrinhdienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTrinhdienComponent]
    });
    fixture = TestBed.createComponent(VideoTrinhdienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
