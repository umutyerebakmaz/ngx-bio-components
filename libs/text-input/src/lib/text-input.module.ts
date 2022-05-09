import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioTextInputComponent } from './components/text-input/text-input.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioTextInputComponent],
    exports: [BioTextInputComponent],
})
export class BioTextInputModule {}
