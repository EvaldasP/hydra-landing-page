import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContactsComponent } from './hero-contacts.component';

describe('HeroContactsComponent', () => {
  let component: HeroContactsComponent;
  let fixture: ComponentFixture<HeroContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
