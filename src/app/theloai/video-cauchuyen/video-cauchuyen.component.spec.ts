import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCauchuyenComponent } from './video-cauchuyen.component';

describe('VideoCauchuyenComponent', () => {
  let component: VideoCauchuyenComponent;
  let fixture: ComponentFixture<VideoCauchuyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCauchuyenComponent]
    });
    fixture = TestBed.createComponent(VideoCauchuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
