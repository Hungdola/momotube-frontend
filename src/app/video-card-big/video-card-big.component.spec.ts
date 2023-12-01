import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardBigComponent } from './video-card-big.component';

describe('VideoCardBigComponent', () => {
  let component: VideoCardBigComponent;
  let fixture: ComponentFixture<VideoCardBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCardBigComponent]
    });
    fixture = TestBed.createComponent(VideoCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
