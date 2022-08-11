import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type Avatar = {
    shape: 'circular' | 'rounded';
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    badgePosition: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRigh';
    badgeColor: 'gray' | 'red' | 'green';
    img: string,
    alt: string,
    placeholder: string;
    disabled: boolean,
};

@Component({
    selector: 'bio-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAvatarComponent {
    @Input() avatar!: Avatar;
}
