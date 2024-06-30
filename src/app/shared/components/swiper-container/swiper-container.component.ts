import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  input,
  viewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-swiper-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-container.component.html',
  styleUrl: './swiper-container.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperContainerComponent {
  public isCenteredNav = input<boolean>(false);
  public isHiddenNav = input<boolean>(false);

  private _swiperContainer =
    viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  public slideNext() {
    this._swiperContainer()?.nativeElement?.swiper?.slideNext();
  }

  public slidePrev() {
    this._swiperContainer()?.nativeElement?.swiper?.slidePrev();
  }
}
