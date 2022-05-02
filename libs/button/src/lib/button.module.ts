import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioButtonComponent } from './components/button/button.component';

class Table {

}
class TableHeader {

}
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
