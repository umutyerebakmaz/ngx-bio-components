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
    template: `<bio-avatar [avatar]="avatar">
<img
[ngClass]="{
'avatar-image': true,
'circular': avatar.shape === 'circular',
'rounded': avatar.shape === 'rounded',
'xxs': avatar.size === 'xxs',
'xs': avatar.size === 'xs',
'sm': avatar.size === 'sm',
'md': avatar.size === 'md',
'lg': avatar.size === 'lg',
'xl': avatar.size === 'xl'
}" *ngIf="avatar.img" [src]="avatar.img"/>
<span></span>
</bio-avatar>
`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});
Primary.args = {
    avatar: {
        shape: 'circular',
        size: 'xxs',
        disabled: true,
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
};
