import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { OnHoverDirective } from './on-hover.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ww = window.innerWidth;
    wh = window.innerHeight;
    isMenuOpen = false;

    animDictionary = {
        "--c1-scale": [3.2, 2.9],
        "--c1-translateX": ['negative', 8, 35]
    }

    @ViewChild('cursorContainer') cursorContainer!: ElementRef;
    @ViewChild('cursor') cursor!: ElementRef;
    @ViewChild('cursorInner') cursor_inner!: ElementRef;

    @HostListener('mousemove', ['$event'])
    mouseMove($event: MouseEvent) {
        if ($event.clientX >= (this.ww - 29) || $event.clientY >= (this.wh - 29)) return;
        setTimeout(() => {
            this.cursor_inner.nativeElement.style.left = `${$event.clientX - 7 / 2}px`;
            this.cursor_inner.nativeElement.style.top = `${$event.clientY - 7 / 2}px`;
    
            setTimeout(() => {
                this.cursor.nativeElement.style.left = `${$event.clientX - 29 / 2}px`;
                this.cursor.nativeElement.style.top = `${$event.clientY - 29 / 2}px`;
            }, 100);
        }, 15);
    }

    animateMenu() {
        const keys = Object.keys(this.animDictionary);

        // for (let i = 0; i < keys.length; i++) {

            // const currentVar = this.element.nativeElement.style[i] as keyof typeof this.animDictionary;
            // console.log(this.animDictionary[currentVar]);

            // console.log(currentVar);


            // --c1-scale
            // --c1-translateX
            // --c1-translateY
            // --c1-rotate
            // --c2-scale
            // --c2-translateX
            // --c2-translateY
            // --c2-rotate
            // --c3-scale
            // --c3-translateX
            // --c3-translateY
            // --c3-rotate
            // --c4-scale
            // --c4-translateX
            // --c4-translateY
            // --c4-rotate
        // }

        // console.log(this.element.nativeElement.style);

        this.updateVars('c1', 'scale', this.getScale(3.2, 2.9));
        this.updateVars('c1', 'translateX', this.getTranslate('negative', 8, 35));
        this.updateVars('c1', 'translateY', this.getTranslate('positive', 12, 14));
        this.updateVars('c1', 'rotate', this.getRotate(201, 145));

        this.updateVars('c2', 'scale', this.getScale(2, 1.5));
        this.updateVars('c2', 'translateX', this.getTranslate('negative', 10, 35));
        this.updateVars('c2', 'translateY', this.getTranslate('negative', 10, 17));
        this.updateVars('c2', 'rotate', this.getRotate(201, 145));

        this.updateVars('c3', 'scale', this.getScale(3.2, 1.7));
        this.updateVars('c3', 'translateX', this.getTranslate('positive', 10, 25));
        this.updateVars('c3', 'translateY', this.getTranslate('positive', 12, 20));
        this.updateVars('c3', 'rotate', this.getRotate(201, 145));

        this.updateVars('c4', 'scale', this.getScale(1.3, 0.8));
        this.updateVars('c4', 'translateX', this.getTranslate('positive', 70, 30));
        this.updateVars('c4', 'translateY', this.getTranslate('negative', 25, 35));
        this.updateVars('c4', 'rotate', this.getRotate(201, 145));
    }

    updateVars(letter: string, prop: string, value: number | string) {
        this.element.nativeElement.style.setProperty(`--${letter}-${prop}`, value);
    }

    getScale(max: number, min: number): number {
        return Math.random() * (max - min) + min;
    }

    getTranslate(operation: string, max: number, min: number): string {
        if (operation === 'negative') {
            return `${Math.floor(Math.random() * max) - min}px`
        } else {
            return `${Math.random() * (max - min) + min}px`;
        }
    }

    getRotate(max: number, min: number): string {
        return `${Math.floor(Math.random() * max) - min}deg`
    }

    constructor(private element: ElementRef) {

    }

    ngOnInit(): void {
        const keys = Object.keys(this.animDictionary);

        
        for (let i = 0; i < keys.length; i++) {
            this.element.nativeElement.style.setProperty(keys[i], 1);
        }
    }
}
