import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHoahauComponent } from './video-hoahau.component';

describe('VideoHoahauComponent', () => {
  let component: VideoHoahauComponent;
  let fixture: ComponentFixture<VideoHoahauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoHoahauComponent]
    });
    fixture = TestBed.createComponent(VideoHoahauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
