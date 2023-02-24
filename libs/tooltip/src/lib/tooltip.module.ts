import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioTooltipComponent } from './components/tooltip/tooltip.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioTooltipComponent],
    exports: [BioTooltipComponent],
})
export class BioTooltipModule {}
