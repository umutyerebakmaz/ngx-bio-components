import { Meta } from '@storybook/angular';
import { BioNotificationComponent } from './notification.component';

export default {
    title: 'Notification',
    component: BioNotificationComponent,
} as Meta<BioNotificationComponent>;

export const simple = {
    render: (args: BioNotificationComponent) => ({
        template: `<bio-notification [config]="config"></bio-notification>`,
        props: args,
    }),
    args: {
        config: {
            politeness: 'assertive'
        }
    },
};
