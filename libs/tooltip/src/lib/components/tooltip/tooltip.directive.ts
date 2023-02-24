import { ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { BioTooltipOverlayComponent } from './tooltip-overlay/tooltip-overlay.component';
import { ComponentPortal } from '@angular/cdk/portal';
@Directive({
    selector: '[bioTooltip]'
})
export class BioTooltipDirective {

    @Input('bioTooltip') text = '';
    private overlayRef!: OverlayRef;
    private tooltipRef!: ComponentRef<BioTooltipOverlayComponent>;

    constructor(
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef
    ) {}

    createTooltip() {
        const positionStrategy = this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                offsetY: 5,
            }
        ]);

        this.tooltipRef = this.overlayRef.attach(new ComponentPortal(BioTooltipOverlayComponent));
    }

    @HostListener('mouseenter')
    show() {
        this.createTooltip();
        this.tooltipRef.instance.text = this.text;
    }

    @HostListener('mouseleave')
    hide() {
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
            this.overlayRef.detach();
        }
    }
}
