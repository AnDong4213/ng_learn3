import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(
    private el: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    console.log('sliders', this.imgSlider.nativeElement);
    console.log(this.el.nativeElement.querySelector('.image-slider'));
  }

  ngAfterViewInit(): void {
    console.log(this.imgs);
    this.imgs.forEach((dom) => {
      // dom.nativeElement.style.height = '100px';
      this.rd2.setStyle(dom.nativeElement, 'height', '100px');
    });
  }

}
