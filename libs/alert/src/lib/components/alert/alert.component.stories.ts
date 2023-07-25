import { Meta } from '@storybook/angular';
import { BioAlertComponent } from './alert.component';

export default {
    title: 'Alert',
    component: BioAlertComponent,
} as Meta<BioAlertComponent>;


const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'


export const warning = {
    render: (args: BioAlertComponent) => ({
        template: `<bio-alert [alert]="alert"></bio-alert>`,
        props: args,
    }),
    args: {
        alert: {
            type: 'warning',
            message
        }
    },
};

export const error = {
    render: (args: BioAlertComponent) => ({
        template: `<bio-alert [alert]="alert"></bio-alert>`,
        props: args,
    }),
    args: {
        alert: {
            type: 'error',
            headerText: 'Validation Error',
            message,
            messages: [
                'Your password must be at least 8 characters',
                'Your password must include at least one pro wrestling finishing move'
            ]
        }
    },
};

export const success = {
    render: (args: BioAlertComponent) => ({
        template: `<bio-alert [alert]="alert"></bio-alert>`,
        props: args,
    }),
    args: {
        alert: {
            type: 'success',
            message
        }
    },
};


export const info = {
    render: (args: BioAlertComponent) => ({
        template: `<bio-alert [alert]="alert"></bio-alert>`,
        props: args,
    }),
    args: {
        alert: {
            type: 'info',
            message
        }
    },
}
