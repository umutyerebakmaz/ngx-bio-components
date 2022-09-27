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
    template: `<bio-badge [badge]="badge">hihi</bio-badge>`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});
Primary.args = {
    badge: {
        size: 'basic',
        dot: false,
        shape: 'basic',
        removeButton: false,
    }
};
