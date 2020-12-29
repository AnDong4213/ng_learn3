import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[appDraggable][dragTag][draggedClass][dragData]',
})
export class DragDirective implements OnInit {
  private _isDraggable = false;

  @Input() dragTag: string;
  @Input() draggedClass: string;
  @Input() dragData: any;

  @Input('appDraggable')
  set isDraggable(draggable: boolean) {
    // console.log('isDraggable', draggable);
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    public el: ElementRef,
    public rd: Renderer2,
    private service: DragDropService
  ) {}

  ngOnInit(): void {
    // console.log('dragData', this.dragData);
    // console.log('dragTag', this.dragTag);
    // console.log('this.el.nativeElement', this.el.nativeElement);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    // console.log('dragstart', ev);
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({ tag: this.dragTag, data: this.dragData });
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    // console.log('dragend', ev);
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
