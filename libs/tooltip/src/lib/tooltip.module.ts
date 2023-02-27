import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioTooltipDirective } from './components/tooltip/tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { BioTooltipComponent } from './components/tooltip/tooltip.component';
@NgModule({
    imports: [CommonModule, OverlayModule],
    declarations: [BioTooltipComponent, BioTooltipDirective],
    exports: [BioTooltipComponent],
})
export class BioTooltipModule {}
0
