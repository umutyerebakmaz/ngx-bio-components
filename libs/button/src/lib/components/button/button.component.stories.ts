import { BioButtonModule } from '../../button.module';


export default {
  title: 'Button',
}

export const primary = () => ({
  moduleMetadata: {
    imports: [BioButtonModule],
  },
  template: `<button bio-button type="button">Primary</button>`,
  props: {}
});
