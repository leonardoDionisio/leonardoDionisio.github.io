import { Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
	selector: '[appOnHover]'
})
export class OnHoverDirective {
	@HostListener('mouseenter') OnMouseEnter() {
		this.renderer.addClass(this.appComponent.cursorContainer.nativeElement, 'cursor-active');
	}

	@HostListener('mouseleave') OnMouseLeave() {
		this.renderer.removeClass(this.appComponent.cursorContainer.nativeElement, 'cursor-active');
	}

	constructor(
		private renderer: Renderer2,
		private appComponent: AppComponent,
		private element: ElementRef
	) { }

}
