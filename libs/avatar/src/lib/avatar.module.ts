import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioAvatarComponent } from './components/avatar/avatar.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioAvatarComponent],
    exports: [BioAvatarComponent],
})
export class BioAvatarModule {}
