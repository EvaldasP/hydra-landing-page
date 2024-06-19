import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { ServicesComponent } from './sections/services/services.component';
import { TechComponent } from './sections/tech/tech.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    IntroductionComponent,
    ServicesComponent,
    TechComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hydra-landing-page';
}
