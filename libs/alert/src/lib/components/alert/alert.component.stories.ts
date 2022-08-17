import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioAlertComponent } from './alert.component';

export default {
    title: 'BioAlertComponent',
    component: BioAlertComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<BioAlertComponent>;

const Template: Story<BioAlertComponent> = (args: BioAlertComponent) => ({
    template: `<bio-alert [alert]="alert"></bio-alert>`,
    props: {
        ...args
    }
});

export const Warning = Template.bind({});
Warning.args = {
    alert: {
        type: 'warning'
    }
};


export const Error = Template.bind({});
Error.args = {
    alert: {
        type: 'error',
        headerText: 'Validation Error',
        messages: [
            'Your password must be at least 8 characters',
            'Your password must include at least one pro wrestling finishing move'
        ]
    }
};

export const Success = Template.bind({});
Success.args = {
    alert: {
        type: 'success'
    }
};

export const Info = Template.bind({});
Info.args = {
    alert: {
        type: 'info'
    }
};
