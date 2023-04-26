import { Meta } from '@storybook/angular';
import { BioBadgeComponent } from './badge.component';

export default {
    title: 'Badge',
    component: BioBadgeComponent,
} as Meta<BioBadgeComponent>;

export const withBorder = {
    render: (args: BioBadgeComponent) => ({
        template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>`,
        props: args,
    }),
    args: {
        size: 'normal',
        shape: 'flat',
        color: 'indigo',
        border: true,
    },
};

export const pillWithBorder = {
    render: (args: BioBadgeComponent) => ({
        template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>`,
        props: args,
    }),
    args: {
        size: 'normal',
        shape: 'pill',
        color: 'indigo',
        border: true,
    },
};

export const smallWithBorder = {
    render: (args: BioBadgeComponent) => ({
        template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>`,
        props: args,
    }),
    args: {
        size: 'small',
        shape: 'flat',
        color: 'red',
        border: true,
    },
};

export const smallFlat = {
    render: (args: BioBadgeComponent) => ({
        template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>`,
        props: args,
    }),
    args: {
        size: 'small',
        shape: 'flat',
        color: 'blue',
        border: false,
    },
};

export const flatWithDot = {
    render: (args: BioBadgeComponent) => ({
        template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>`,
        props: args,
    }),
    args: {
        size: 'small',
        shape: 'flat',
        color: 'blue',
        border: false,
    },
};

