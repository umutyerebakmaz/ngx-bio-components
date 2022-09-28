import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioBadgeComponent } from './components/badge/badge.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioBadgeComponent],
    exports: [BioBadgeComponent],
})
export class BioBadgeModule {}
