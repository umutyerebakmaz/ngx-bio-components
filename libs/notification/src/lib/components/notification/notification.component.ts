import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    selector: 'bio-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioNotificationComponent {}
