import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHaihuocComponent } from './video-haihuoc.component';

describe('VideoHaihuocComponent', () => {
  let component: VideoHaihuocComponent;
  let fixture: ComponentFixture<VideoHaihuocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoHaihuocComponent]
    });
    fixture = TestBed.createComponent(VideoHaihuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
