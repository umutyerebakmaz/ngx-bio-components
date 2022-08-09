import { Story } from '@storybook/angular';
import { BioAvatarModule } from '../../avatar.module';
import { BioAvatarComponent } from './avatar.component';

export default {
    title: 'Avatar',
}

const Template: Story<BioAvatarComponent> = (args: BioAvatarComponent) => ({
    moduleMetadata: {
        imports: [BioAvatarModule],
    },

    template: `<img bio-circular-avatar [avatar]="avatar" [src]="avatar.img" alt="{{ avatar.alt }}">`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});
Primary.args = {
    avatar: {
        size: 'xl',
        disabled: true,
        img: 'https://media.kommunity.com/avatar/f39ac89b-6924-471e-9ab8-8885f1b783bd_avatar_620cf10f8ea47.jpeg'
    },
};
