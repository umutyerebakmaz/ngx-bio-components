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
    template: `<bio-badge [size]="size" [shape]="shape" [color]="color" [border]="border">Template</bio-badge>`,
    props: {
        ...args
    }
});

export const withBorder = Template.bind({});
withBorder.args = {
    size: 'normal',
    shape: 'flat',
    color: 'gray',
    border: true,
};
