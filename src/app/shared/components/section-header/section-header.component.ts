import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  public mainText = input.required<string>();
  public secondaryText = input.required<string>();
}
