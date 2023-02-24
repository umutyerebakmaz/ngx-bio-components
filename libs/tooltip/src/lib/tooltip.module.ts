import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioTooltipDirective } from './components/tooltip/tooltip.directive';
import { BioTooltipOverlayComponent } from './components/tooltip/tooltip-overlay/tooltip-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
    imports: [CommonModule, OverlayModule],
    declarations: [BioTooltipOverlayComponent, BioTooltipDirective],
    exports: [BioTooltipDirective],
})
export class BioTooltipModule {}
0
