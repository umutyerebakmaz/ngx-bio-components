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
    // buradaki yazılış son kullanım şekli . yayınlamadan önce
    // <div .... diye html olsun
    template: `<bio-avatar [avatar]="avatar" [ngClass]="{'default': true}">
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
}" *ngIf="avatar.img; else icon" [src]="avatar.img"/>
<ng-template #icon>
  <svg [ngClass]="{
'icon': true,
'circular': avatar.shape === 'circular',
'rounded': avatar.shape === 'rounded',
'xxs': avatar.size === 'xxs',
'xs': avatar.size === 'xs',
'sm': avatar.size === 'sm',
'md': avatar.size === 'md',
'lg': avatar.size === 'lg',
'xl': avatar.size === 'xl'
}" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
</ng-template>
<span *ngIf="avatar.badgeColor" class="avatar-notification"
[ngClass]="{
'circular-notification': avatar.shape === 'circular',
'rounded-notification': avatar.shape === 'rounded',
'gray': avatar.badgeColor === 'gray',
'red': avatar.badgeColor === 'red',
'green': avatar.badgeColor === 'green',
'top-right': avatar.badgePosition === 'topRight',
'bottom-right': avatar.badgePosition == 'bottomRight',
'xxs': avatar.size === 'xxs',
'xs': avatar.size === 'xs',
'sm': avatar.size === 'sm',
'md': avatar.size === 'md',
'lg': avatar.size === 'lg',
'xl': avatar.size === 'xl'
}">
</span>
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
        size: 'xl',
        badgeColor: 'gray',
        badgePosition: 'topRight',
        // img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        img: null
    },
};
