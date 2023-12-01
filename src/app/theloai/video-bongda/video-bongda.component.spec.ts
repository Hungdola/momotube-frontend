import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBongdaComponent } from './video-bongda.component';

describe('VideoBongdaComponent', () => {
  let component: VideoBongdaComponent;
  let fixture: ComponentFixture<VideoBongdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoBongdaComponent]
    });
    fixture = TestBed.createComponent(VideoBongdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
