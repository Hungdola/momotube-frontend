import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTreemComponent } from './video-treem.component';

describe('VideoTreemComponent', () => {
  let component: VideoTreemComponent;
  let fixture: ComponentFixture<VideoTreemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTreemComponent]
    });
    fixture = TestBed.createComponent(VideoTreemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
