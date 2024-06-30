import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SwiperContainerComponent } from '../../../../shared/components/swiper-container/swiper-container.component';

@Component({
  selector: 'app-hero-contacts',
  standalone: true,
  imports: [SwiperContainerComponent],
  templateUrl: './hero-contacts.component.html',
  styleUrl: './hero-contacts.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroContactsComponent {}
