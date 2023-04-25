import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioBadgeComponent } from './badge.component';

export default {
    title: 'BioBadgeComponent',
    component: BioBadgeComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<BioBadgeComponent>;

const Template: Story<BioBadgeComponent> = (args: BioBadgeComponent) => ({
    template: `
<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">
  <svg class="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
    <circle cx="3" cy="3" r="3" />
  </svg>
Template
</bio-badge>`,
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
