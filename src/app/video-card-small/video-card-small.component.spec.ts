import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardSmallComponent } from './video-card-small.component';

describe('VideoCardSmallComponent', () => {
  let component: VideoCardSmallComponent;
  let fixture: ComponentFixture<VideoCardSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCardSmallComponent]
    });
    fixture = TestBed.createComponent(VideoCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
