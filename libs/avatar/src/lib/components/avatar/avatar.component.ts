import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

export type Avatar = {
    shape?: 'circular' | 'rounded';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    badgePosition?: 'topRight' | 'bottomRigh';
    badgeColor?: 'gray' | 'red' | 'green';
    img?: string | undefined | null,
    alt?: string,
    placeholder?: string;
    disabled?: boolean,
};

@Component({
    selector: 'bio-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAvatarComponent implements OnInit {
    @Input() avatar!: Avatar;

    ngOnInit(): void {
        if (!this.avatar.shape || this.avatar.shape === null) {
            this.avatar.shape = 'circular';
        }

        if (!this.avatar.size || this.avatar.size === null) {
            this.avatar.size = 'md'
        }

        if (this.avatar.placeholder) {
            delete this.avatar.img;
        }
        console.log(this.avatar);
    }

    get addPlaceHolderContainerClass() {
        return {
            'xxs': this.avatar.size === 'xxs',
            'xs': this.avatar.size === 'xs',
            'sm': this.avatar.size === 'sm',
            'md': this.avatar.size === 'md',
            'lg': this.avatar.size === 'lg',
            'xl': this.avatar.size === 'xl'
        }
    }

    get addPlaceHolderTextClass() {
        return {
            'xs': this.avatar.size === 'xs',
            'sm': this.avatar.size === 'sm',
            'lg': this.avatar.size === 'lg',
            'xl': this.avatar.size === 'xl'
        }
    }

    get addImageAndIconClass() {
        return {
            'circular': this.avatar.shape === 'circular',
            'rounded': this.avatar.shape === 'rounded',
            'xxs': this.avatar.size === 'xxs',
            'xs': this.avatar.size === 'xs',
            'sm': this.avatar.size === 'sm',
            'md': this.avatar.size === 'md',
            'lg': this.avatar.size === 'lg',
            'xl': this.avatar.size === 'xl'
        }
    }

    get badgeClass() {
        return {
            'circular-notification': this.avatar.shape === 'circular',
            'rounded-notification': this.avatar.shape === 'rounded',
            'gray': this.avatar.badgeColor === 'gray',
            'red': this.avatar.badgeColor === 'red',
            'green': this.avatar.badgeColor === 'green',
            'top-right': this.avatar.badgePosition === 'topRight',
            // 'bottom-right': this.avatar.badgePosition == 'bottomRight',
            'xxs': this.avatar.size === 'xxs',
            'xs': this.avatar.size === 'xs',
            'sm': this.avatar.size === 'sm',
            'md': this.avatar.size === 'md',
            'lg': this.avatar.size === 'lg',
            'xl': this.avatar.size === 'xl'
        }
    }
}
