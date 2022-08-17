import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export type Alert = {
    type?: 'error' | 'success' | 'warning' | 'info';
    messages?: string | string[],
    headerText?: string,
};
@Component({
    selector: 'bio-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAlertComponent implements OnInit {

    @Input() alert!: Alert;

    ngOnInit(): void {
        console.log('add initial states!');
    }

    get addAlertTypeClass() {
        return {
            'bg-red-50': this.alert.type === 'error',
            'bg-green-50': this.alert.type === 'success',
            'bg-yellow-50': this.alert.type === 'warning',
            'bg-blue-50': this.alert.type === 'info',
        }
    }

    get addHeaderTextColorClass() {
        return {
            'text-red-800': this.alert.type === 'error',
            'text-green-800': this.alert.type === 'success',
            'text-yellow-800': this.alert.type === 'warning',
            'text-blue-800': this.alert.type === 'info',
        }
    }

    get addMessageTextColorClass() {
        return {
            'text-red-700': this.alert.type === 'error',
            'text-green-700': this.alert.type === 'success',
            'text-yellow-700': this.alert.type === 'warning',
            'text-blue-700': this.alert.type === 'info',
        }
    }
}
