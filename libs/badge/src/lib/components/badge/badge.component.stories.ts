import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioBadgeComponent } from './badge.component';

export default {
    title: 'Badge',
    component: BioBadgeComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<BioBadgeComponent>;

const Template: Story<BioBadgeComponent> = (args: BioBadgeComponent) => ({
    template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Badge</bio-badge>
`,
    props: {
        ...args
    }
});

export const withBorder = Template.bind({});
withBorder.args = {
    size: 'normal',
    shape: 'flat',
    color: 'indigo',
    border: true,
};

export const pillWithBorder = Template.bind({});
pillWithBorder.args = {
    size: 'normal',
    shape: 'pill',
    color: 'indigo',
    border: true,
}

export const smallWithBorder = Template.bind({});
smallWithBorder.args = {
    size: 'small',
    shape: 'flat',
    color: 'red',
    border: true,
}

export const smallFlat = Template.bind({});
smallFlat.args = {
    size: 'small',
    shape: 'flat',
    color: 'blue',
    border: false,
}

export const flatWithDot = Template.bind({});
flatWithDot.args = {
    size: 'small',
    shape: 'flat',
    color: 'blue',
    border: false,
}
