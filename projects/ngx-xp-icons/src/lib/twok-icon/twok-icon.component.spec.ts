import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwokIconComponent } from './twok-icon.component';

describe('TwokIconComponent', () => {
  let component: TwokIconComponent;
  let fixture: ComponentFixture<TwokIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwokIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwokIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
