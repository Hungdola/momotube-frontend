import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagnameComponent } from './tagname.component';

describe('TagnameComponent', () => {
  let component: TagnameComponent;
  let fixture: ComponentFixture<TagnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagnameComponent]
    });
    fixture = TestBed.createComponent(TagnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
