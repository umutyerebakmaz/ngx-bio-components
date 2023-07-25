import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioNotificationComponent } from './components/notification/notification.component';
@NgModule({
    imports: [CommonModule],
    declarations: [BioNotificationComponent],
    exports: [BioNotificationComponent],
})
export class BioNotificationModule {}
