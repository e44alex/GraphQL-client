import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class TestDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {
    console.log(this.appHighlight);
    el.nativeElement.style.background = this.appHighlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
