import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BioButtonModule } from '../../button.module';
import { BioButtonComponent } from './button.component';

export default {
  title: 'BioButtonComponent',
  component: BioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BioButtonModule],
    })
  ],
} as Meta<BioButtonComponent>;

const Template: Story<BioButtonComponent> = (args: BioButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
}

export const White = Template.bind({});
White.args = {
  color: 'white'
}

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
}


export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
}

export const Round = Template.bind({});
Round.args = {
}


export const Circular = Template.bind({});
Circular.args = {
}
