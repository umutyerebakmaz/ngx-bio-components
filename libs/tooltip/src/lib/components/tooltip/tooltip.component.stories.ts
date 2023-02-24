import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioTooltipComponent } from './tooltip.component';

export default {
    title: 'BioTooltipComponent',
    component: BioTooltipComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<BioTooltipComponent>;

const Template: Story<BioTooltipComponent> = (args: BioTooltipComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
