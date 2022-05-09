import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioButtonComponent } from './components/button/button.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    BioButtonComponent
  ],
  exports: [
    BioButtonComponent
  ],
})
export class BioButtonModule {}
