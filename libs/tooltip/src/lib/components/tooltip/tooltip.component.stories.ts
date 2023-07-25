import { moduleMetadata, Meta } from '@storybook/angular';
import { BioTooltipComponent } from './tooltip.component';
import { BioTooltipDirective } from './tooltip.directive';


export default {
    title: 'Tooltip',
    component: BioTooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [BioTooltipDirective]
        }),
    ],
} as Meta<BioTooltipComponent>;

export const tooltip = {
    render: (args: BioTooltipComponent) => ({
        template: `<div class="tooltip-container"><button bioTooltip="Example Tooltip Message">Tooltip Development</button></div>`,
        props: args,
    }),
    args: {
        bioTooltip: 'Example Tooltip Message',
    },
};
