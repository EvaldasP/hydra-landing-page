import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ProcessCardComponent } from './components/process-card/process-card.component';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ProcessCardComponent, CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProcessComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('labas') labas!: HTMLElement;

  public readonly processes = [
    '3D Conception & Design',
    'Interaction Design',
    'VR World User Testing',
    'Hydra VR Deploy',
  ];

  public slideNext() {
    const swiper = this.swiperContainer?.nativeElement?.swiper as Swiper;

    swiper?.slideNext();
  }

  public slidePrev() {
    const swiper = this.swiperContainer?.nativeElement?.swiper as Swiper;

    swiper?.slidePrev();
  }
}
