import { Component, Input } from '@angular/core';

@Component({
    selector: 'bio-tooltip-overlay',
    templateUrl: './tooltip-overlay.component.html',
    styleUrls: ['./tooltip-overlay.component.scss']
})
export class BioTooltipOverlayComponent {
    @Input() text = '';
}
