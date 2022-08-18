import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type Alert = {
    type: 'error' | 'success' | 'warning' | 'info';
    messages?: string[];
    message?: string;
    headerText?: string;
};
@Component({
    selector: 'bio-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAlertComponent {

    @Input() alert!: Alert;
    @Output() private buttonClicked = new EventEmitter();

    show = true;

    onButtonClicked() {
        this.show = !this.show;
        this.buttonClicked.emit();
    }

    get addAlertTypeClass() {
        return {
            'bg-red-50 border-red-200': this.alert.type === 'error',
            'bg-green-50 border-green-200': this.alert.type === 'success',
            'bg-yellow-50 border-yellow-200': this.alert.type === 'warning',
            'bg-blue-50 border-blue-200': this.alert.type === 'info',
            'hidden': !this.show,
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

    get addButtonClass() {
        return {
            'focus:ring-red-500 bg-red-600 hover:bg-red-700': this.alert.type === 'error',
            'focus:ring-green-500 bg-green-600 hover:bg-green-700': this.alert.type === 'success',
            'focus:ring-yellow-500 bg-yellow-600 hover:bg-yellow-700': this.alert.type === 'warning',
            'focus:ring-blue-500 bg-blue-600 hover:bg-blue-700': this.alert.type === 'info',
        }
    }
}
