import { Component, Input } from '@angular/core';
import { ServiceView } from '../../service.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() service!: ServiceView;
}
