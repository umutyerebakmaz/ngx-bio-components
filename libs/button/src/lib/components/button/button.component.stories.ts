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
  template: `<button bio-button [color]="color" [size]="size" [disabled]="disabled">Button text</button>`,
  props: {
    ...args
  }
});

export const primary = Template.bind({});
primary.args = {
  color: 'primary',
  size: "md",
  disabled: true
}

export const secondary = Template.bind({});
secondary.args = {
  color: 'secondary',
  size: 'md',
  disabled: true
}

export const white = Template.bind({});
white.args = {
  color: 'white',
  size: 'md',
    disabled: true
  }
