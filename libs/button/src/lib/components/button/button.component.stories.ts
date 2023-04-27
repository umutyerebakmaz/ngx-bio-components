import { Meta } from '@storybook/angular';
import { BioButtonComponent } from './button.component';

export default {
    title: 'Button',
    component: BioButtonComponent
} as Meta<BioButtonComponent>;

// medum
export const primaryMedium = {
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

export const secondaryMedium = {
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

export const whiteMedium = {
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

// small
export const primarySmall = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'primary',
        size: "sm",
        type: 'button',
        disabled: false,
    },
};

export const secondarySmall = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'secondary',
        size: 'sm',
        type: 'submit',
        disabled: false,
    },
};

export const whiteSmall = {
    render: (args: BioButtonComponent) => ({
        template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button</button>`,
        props: args,
    }),
    args: {
        color: 'white',
        size: 'sm',
        type: 'reset'
    },
};



