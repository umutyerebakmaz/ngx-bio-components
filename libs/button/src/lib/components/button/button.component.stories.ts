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
    template: `<button bio-circular-button [color]="color" [size]="size" [disabled]="disabled">
 <svg style="width: 20px; height:20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>
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
