import { BioButtonModule } from '../../button.module';
import { BioButtonComponent } from './button.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Button',
}

const Template: Story<BioButtonComponent> = (args: BioButtonComponent) => ({
  moduleMetadata: {
    imports: [BioButtonModule],
  },
  template: `
<button
bio-button
[text]="text"
[color]="color"
[size]="size"
[disabled]="disabled"
[type]="type"
>
{{ text }}
</button>`,
  props: {
    ...args
  }
});

export const primary = Template.bind({});
primary.args = {
  text: 'Primary Button',
  color: 'primary',
  size: "md",
  type: 'button'
}

export const secondary = Template.bind({});
secondary.args = {
  text: 'Secondary Button',
  color: 'secondary',
  size: 'md',
  type: 'submit',
  disabled: true,
}

export const white = Template.bind({});
white.args = {
  text: 'White Button',
  color: 'white',
  size: 'md',
  type: 'reset'
}
