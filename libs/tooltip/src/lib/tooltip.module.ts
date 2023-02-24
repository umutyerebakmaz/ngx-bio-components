import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioTooltipDirective } from './components/tooltip/tooltip.directive';
import { BioTooltipOverlayComponent } from './components/tooltip/tooltip-overlay/tooltip-overlay.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioTooltipOverlayComponent, BioTooltipDirective],
    exports: [BioTooltipDirective],
})
export class BioTooltipModule {}
