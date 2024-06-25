import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TechComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  public readonly componies = [
    'tech/unreal.png',
    'tech/unity.png',
    'tech/oculus.png',
    'tech/vive.png',
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
