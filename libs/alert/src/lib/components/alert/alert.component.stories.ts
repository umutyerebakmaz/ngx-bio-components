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
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
