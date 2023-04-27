import { Meta } from '@storybook/angular';
import { BioTextInputComponent } from './text-input.component';

export default {
    title: 'TextInput',
    component: BioTextInputComponent,
} as Meta<BioTextInputComponent>;

const Template: Story<BioTextInputComponent> = (args: BioTextInputComponent) => ({
    props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}

export const primary = {
    render: (args: BioTextInputComponent) => ({
        template: `<p>text input is work</p>`,
        props: args,
    }),
    args: {

    },
};
