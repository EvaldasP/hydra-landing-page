import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProcessCardComponent } from './components/process-card/process-card.component';
import { SwiperContainerComponent } from '../../shared/components/swiper-container/swiper-container.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [
    ProcessCardComponent,
    SwiperContainerComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProcessComponent {
  public readonly processes = [
    '3D Conception & Design',
    'Interaction Design',
    'VR World User Testing',
    'Hydra VR Deploy',
  ];
}
