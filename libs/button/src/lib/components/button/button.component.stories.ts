import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioButtonComponent } from './button.component';

export default {
  title: 'BioButtonComponent',
  component: BioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BioButtonComponent>;

const Template: Story<BioButtonComponent> = (args: BioButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
