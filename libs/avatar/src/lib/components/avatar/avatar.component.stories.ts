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
<img #imgElement *ngIf="avatar.img" class="circular xs" [src]="avatar.img" atr="23"/>
<span #spanElement class="badge"></span>
</bio-avatar>
`,
    props: {
        ...args
    }
});

export const Primary = Template.bind({});
Primary.args = {
    avatar: {
        size: 'xl',
        disabled: true,
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
};
