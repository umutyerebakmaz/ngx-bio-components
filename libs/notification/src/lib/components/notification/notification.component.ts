import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';

export type BioNotificationConfig = {
    politeness?: 'off' | 'polite' | 'assertive';
    announcementMessage?: string;
    duration?: number | 3000;
    containerClass?: string | string[];
    horizontalPosition?: 'top' | 'bottom';
    verticalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
}
@Component({
    selector: 'bio-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioNotificationComponent implements OnInit {
    @Input() config!: BioNotificationConfig;
    @Output() private onClose = new EventEmitter();
    ngOnInit(): void {
        console.log(this.config);
    }
}
