import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Input, SimpleChanges, OnChanges } from '@angular/core';

export type Avatar = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    notificationPosition?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRigh';
    notificationColor?: 'gray' | 'red' | 'green';
    disabled?: boolean,
    img?: string,
    alt?: string,
    placeholder?: string;
};

const AVATAR_HOST_ATTRIBUTES: string[] = [
    'bio-circular-avatar',
    'bio-round-avatar',
];
@Component({
    selector: 'img[bio-circular-avatar], img[bio-round-avatar]',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAvatarComponent implements OnInit, OnChanges {
    @Input() avatar!: Avatar;
    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        for (const attr of AVATAR_HOST_ATTRIBUTES) {
            if (this.hasHostAttributes(attr)) {
                (this.getHostElement() as HTMLElement).classList.add(attr);
            }
        }
    }

    ngOnInit(): void {
        if (this.avatar.size) {
            this.elementRef.nativeElement.classList.add(`${this.avatar.size}`);
        } else {
            this.avatar.size = 'md';
            this.elementRef.nativeElement.classList.add(`md`);
        }

        if (this.avatar.disabled) {
            this.elementRef.nativeElement.classList.add('bio-avatar-disabled');
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['avatar']) {
            if (changes['avatar'].currentValue.disabled) {
                this.elementRef.nativeElement.classList.add('bio-avatar-disabled');
            }
            if (!changes['avatar'].currentValue.disabled) {
                this.elementRef.nativeElement.classList.remove('bio-avatar-disabled');
            }
            if (changes['avatar'].currentValue.size) {
                this.elementRef.nativeElement.classList.remove('xs', 'sm', 'md', 'lg', 'xl');
                this.elementRef.nativeElement.classList.add(`${this.avatar.size}`)
            }
        }
    }

    hasHostAttributes(...attributes: string[]) {
        return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
    }

    getHostElement() {
        return this.elementRef.nativeElement;
    }
}
