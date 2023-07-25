import { Meta } from '@storybook/angular';
import { BioAvatarComponent } from './avatar.component';

export default {
    title: 'Avatar',
    component: BioAvatarComponent,
} as Meta<BioAvatarComponent>;

export const primary = {
    render: (args: BioAvatarComponent) => ({
        template: `<bio-avatar [avatar]="avatar"></bio-avatar>`,
        props: args,
    }),
    args: {
        avatar: {
            size: 'xl',
            badgeColor: 'green',
            badgePosition: 'topRight',
            path: 'http://localhost:4000/images/users/',
            img: '28b4bf01-a067-46cb-9244-c55809608727.jpg',
            placeholder: 'IO',
        }
    }
}
