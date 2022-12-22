import { BioButtonModule } from '../../button.module';
import { BioButtonComponent } from './button.component';
import { Story } from '@storybook/angular';

export default {
    title: 'Button',
}

const Template: Story<BioButtonComponent> = (args: BioButtonComponent) => ({
    moduleMetadata: {
        imports: [BioButtonModule],
    },
    template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">
Button Text
</button>`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    size: "md",
    type: 'button',
    disabled: false,
}

export const secondary = Template.bind({});
secondary.args = {
    color: 'secondary',
    size: 'md',
    type: 'submit',
    disabled: false,
}

export const white = Template.bind({});
white.args = {
    color: 'white',
    size: 'md',
    type: 'reset'
}
