import { Component, ChangeDetectionStrategy, Input, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

export type ButtonColor = 'primary' | 'secondary' | 'white';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonType = 'button' | 'reset' | 'submit';

const BUTTON_HOST_ATTRIBUTES: string[] = [
    'bio-button',
    'bio-circular-button',
    'bio-round-button',
];
@Component({
    selector: 'button[bio-button], button[bio-circular-button], button[bio-round-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BioButtonComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() color!: ButtonColor;
    @Input() size!: ButtonSize;
    @Input() type!: ButtonType;
    @Input() disabled!: boolean;

    constructor(
        private readonly elementRef: ElementRef<HTMLButtonElement>,
        private readonly focusMonitor: FocusMonitor
    ) {
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this.hasHostAttributes(attr)) {
                (this.getHostElement() as HTMLElement).classList.add(attr);
            }
        }
    }

    ngOnInit(): void {
        if (this.color) {
            this.elementRef.nativeElement.classList.add(`${this.color}`);
        } else {
            this.color = 'primary';
            this.elementRef.nativeElement.classList.add(`primary`);
        }

        if (this.size) {
            this.elementRef.nativeElement.classList.add(`${this.size}`);
        } else {
            this.size = 'md';
            this.elementRef.nativeElement.classList.add(`md`);
        }

        if (this.disabled) {
            this.elementRef.nativeElement.classList.remove(...['primary', 'secondary', 'white']);
            this.elementRef.nativeElement.classList.add('bio-button-disabled');
            this.elementRef.nativeElement.setAttribute('disabled', 'true');
        }

        if (this.type) {
            console.log(this.type);
            this.elementRef.nativeElement.setAttribute('type', this.type);
        } else {
            console.log(this.type);
            this.type = 'submit';
            this.elementRef.nativeElement.setAttribute('type', 'submit');
        }
    }

    ngAfterViewInit() {
        this.focusMonitor.monitor(this.elementRef, true);
    }

    ngOnDestroy(): void {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }


    hasHostAttributes(...attributes: string[]) {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
    }

    getHostElement() {
        return this.elementRef.nativeElement;
    }
}
