import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeCardComponent } from './thong-ke-card.component';

describe('ThongKeCardComponent', () => {
  let component: ThongKeCardComponent;
  let fixture: ComponentFixture<ThongKeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThongKeCardComponent]
    });
    fixture = TestBed.createComponent(ThongKeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
