import { Component } from '@angular/core';
import { ServiceCardComponent } from './componenets/service-card/service-card.component';
import { ServiceView } from './service.interface';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  public readonly availableServices: ServiceView[] = [
    {
      name: 'Simulation',
      pictureSrc: 'services/simulation.png',
    },
    {
      name: 'Education',
      pictureSrc: 'services/education.png',
    },
    {
      name: 'Self-Care',
      pictureSrc: 'services/self-care.png',
    },
    {
      name: 'Outdoor',
      pictureSrc: 'services/outdoor.png',
    },
  ];
}
