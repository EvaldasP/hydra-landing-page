import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperContainerComponent } from './swiper-container.component';

describe('SwiperContainerComponent', () => {
  let component: SwiperContainerComponent;
  let fixture: ComponentFixture<SwiperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
