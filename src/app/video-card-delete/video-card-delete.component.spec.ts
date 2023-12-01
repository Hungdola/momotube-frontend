import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardDeleteComponent } from './video-card-delete.component';

describe('VideoCardDeleteComponent', () => {
  let component: VideoCardDeleteComponent;
  let fixture: ComponentFixture<VideoCardDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCardDeleteComponent]
    });
    fixture = TestBed.createComponent(VideoCardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
