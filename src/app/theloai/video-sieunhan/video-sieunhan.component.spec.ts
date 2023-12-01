import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSieunhanComponent } from './video-sieunhan.component';

describe('VideoSieunhanComponent', () => {
  let component: VideoSieunhanComponent;
  let fixture: ComponentFixture<VideoSieunhanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSieunhanComponent]
    });
    fixture = TestBed.createComponent(VideoSieunhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
