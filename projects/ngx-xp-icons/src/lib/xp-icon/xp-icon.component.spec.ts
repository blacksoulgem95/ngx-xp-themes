import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpIconComponent } from './xp-icon.component';

describe('XpIconComponent', () => {
  let component: XpIconComponent;
  let fixture: ComponentFixture<XpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XpIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
