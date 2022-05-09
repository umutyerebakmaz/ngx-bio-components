import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioTextInputComponent } from './text-input.component';

export default {
  title: 'BioTextInputComponent',
  component: BioTextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BioTextInputComponent>;

const Template: Story<BioTextInputComponent> = (args: BioTextInputComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}