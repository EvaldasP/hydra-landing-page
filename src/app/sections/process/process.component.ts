import { Component } from '@angular/core';
import { ProcessCardComponent } from './components/process-card/process-card.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ProcessCardComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  public readonly processes = [
    '3D Conception & Design',
    'Interaction Design',
    'VR World User Testing',
    'Hydra VR Deploy',
  ];
}
