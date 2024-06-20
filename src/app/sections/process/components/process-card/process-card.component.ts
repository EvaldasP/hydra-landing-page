import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [],
  templateUrl: './process-card.component.html',
  styleUrl: './process-card.component.scss',
})
export class ProcessCardComponent {
  @Input() title!: string;
  @Input() cardNumber!: number;
}
