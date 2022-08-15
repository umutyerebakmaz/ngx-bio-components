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
    template: `<bio-avatar [avatar]="avatar"></bio-avatar>`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});

Primary.args = {
    avatar: {
        size: 'xl',
        badgeColor: 'green',
        badgePosition: 'topRight',
        path: 'http://localhost:4000/images/users/',
        img: '28b4bf01-a067-46cb-9244-c55809608727.jpg',
        placeholder: 'IO',
    },
};
