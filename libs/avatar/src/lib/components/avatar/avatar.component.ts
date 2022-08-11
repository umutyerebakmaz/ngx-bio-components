import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Input, SimpleChanges, Renderer2, ViewChild } from '@angular/core';

export type Avatar = {
    shape?: 'circular' | 'rounded';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    badgePosition?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRigh';
    badgeColor?: 'gray' | 'red' | 'green';
    img?: string,
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
    imgElement!: HTMLCollectionOf<HTMLImageElement>;
    spanElement!: HTMLCollectionOf<HTMLSpanElement>;

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        this.imgElement = this.elementRef.nativeElement?.getElementsByTagName('img');
        this.spanElement = this.elementRef.nativeElement?.getElementsByTagName('span');
        console.log(this.imgElement);
        console.log(this.spanElement);
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#000');
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline-flex');
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-unused-vars, @angular-eslint/use-lifecycle-interface
    ngOnChanges(changes: SimpleChanges): void {
        //

    }


}
