import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { ServicesComponent } from './sections/services/services.component';
import { TechComponent } from './sections/tech/tech.component';
import { ProcessComponent } from './sections/process/process.component';
import { FormComponent } from './sections/form/form.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    IntroductionComponent,
    ServicesComponent,
    TechComponent,
    ProcessComponent,
    FormComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'hydra-landing-page';
}
