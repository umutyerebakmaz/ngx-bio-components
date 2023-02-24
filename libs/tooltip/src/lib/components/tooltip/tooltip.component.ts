import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    selector: 'bio-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioTooltipComponent {}
