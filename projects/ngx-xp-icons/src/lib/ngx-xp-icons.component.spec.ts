import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXpIconsComponent } from './ngx-xp-icons.component';

describe('NgxXpIconsComponent', () => {
  let component: NgxXpIconsComponent;
  let fixture: ComponentFixture<NgxXpIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxXpIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxXpIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
