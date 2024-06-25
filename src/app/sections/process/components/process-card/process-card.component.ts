import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [],
  templateUrl: './process-card.component.html',
  styleUrl: './process-card.component.scss',
})
export class ProcessCardComponent {
  public title = input.required<string>();
  public cardNumber = input.required<number>();
}
