import { Meta } from '@storybook/angular';
import { BioNotificationComponent } from './notification.component';

export default {
    title: 'Notification',
    component: BioNotificationComponent,
} as Meta<BioNotificationComponent>;

export const Primary = {
    render: (args: BioNotificationComponent) => ({
        props: args,
    }),
    args: {},
};