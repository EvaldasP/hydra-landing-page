import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { ServicesComponent } from './sections/services/services.component';
import { TechComponent } from './sections/tech/tech.component';
import { ProcessComponent } from './sections/process/process.component';
import { FormComponent } from './sections/form/form.component';
import { FooterComponent } from './sections/footer/footer.component';
import { delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

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
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  public readonly isLoaded$ = of(true).pipe(delay(3000));

  public ngOnInit(): void {
    AOS.init({ once: true });
  }
}
