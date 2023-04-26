import { Meta } from '@storybook/angular';
import { BioButtonComponent } from './button.component';

export default {
    title: 'Button',
    component: BioButtonComponent
} as Meta<BioButtonComponent>;

export const primary = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'primary',
        size: "md",
        type: 'button',
        disabled: false,
    },
};

export const secondary = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'secondary',
        size: 'md',
        type: 'submit',
        disabled: false,
    },
};

export const white = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'white',
        size: 'md',
        type: 'reset'
    },
};
