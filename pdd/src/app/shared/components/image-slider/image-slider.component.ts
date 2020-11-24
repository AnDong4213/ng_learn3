import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface ImageSlider {
  id?: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  selectedIndex = 0;
  intervalId;

  constructor(private el: ElementRef, private rd2: Renderer2) {}

  ngOnInit() {
    // console.log('sliders', this.imgSlider.nativeElement);
    // console.log(this.el.nativeElement.querySelector('.image-slider'));
  }

  ngAfterViewInit(): void {
    // console.log(this.imgs);
    // console.log(this.imgSlider)
    /* this.imgs.forEach((dom) => {
      // dom.nativeElement.style.height = '100px';
      this.rd2.setStyle(dom.nativeElement, 'height', '100px');
    }); */
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }
}
