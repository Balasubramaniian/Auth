import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private Element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') OnmouseEnter(){
    this.renderer.addClass(this.Element.nativeElement,'highlight');
  }
  @HostListener('mouseout') OnmouseOut(){
  this.renderer.removeClass(this.Element.nativeElement,'highlight')
  }
}
