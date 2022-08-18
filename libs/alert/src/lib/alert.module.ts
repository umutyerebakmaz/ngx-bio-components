import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioAlertComponent } from './components/alert/alert.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioAlertComponent],
    exports: [BioAlertComponent],
})
export class BioAlertModule {}
