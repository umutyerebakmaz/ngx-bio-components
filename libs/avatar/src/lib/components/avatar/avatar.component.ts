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

    constructor() {
        // demo
    }

    ngOnInit(): void {
        console.log(this.avatar);
    }

}
