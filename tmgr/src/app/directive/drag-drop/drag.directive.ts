import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDraggable][draggedClass]',
})
export class DragDirective {
  private _isDraggable = false;

  @Input() dragTag: string;
  @Input() draggedClass: string;
  @Input() dragData: any;

  @Input('appDraggable')
  set isDraggable(draggable: boolean) {
    console.log('draggable', draggable);
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(public el: ElementRef, public rd: Renderer2) {}

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
