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
    template: `
<div class="container">
<button bioTooltip="Example Tooltip Message">Tooltip Development</button>
</div>
`
});

export const Primary = Template.bind({});
Primary.args = {};
