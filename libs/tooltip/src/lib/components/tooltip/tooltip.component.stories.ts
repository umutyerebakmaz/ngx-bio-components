import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioTooltipComponent } from './tooltip.component';
import { BioTooltipDirective } from './tooltip.directive';


export default {
    title: 'BioTooltipComponent',
    component: BioTooltipComponent,
    decorators: [
        moduleMetadata({
            imports: [],
            declarations: [BioTooltipDirective]
        }),
    ],
} as Meta<BioTooltipComponent>;

const Template: Story<BioTooltipComponent> = (args: BioTooltipComponent) => ({
    props: args,
    template: `<button bioTooltip="demo">Tooltip Development</button>`
});

export const Primary = Template.bind({});
Primary.args = {};
