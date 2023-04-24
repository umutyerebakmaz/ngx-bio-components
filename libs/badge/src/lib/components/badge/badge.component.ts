import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type BioBadgeSize = 'normal' | 'small';
export type BioBadgeShape = 'flat' | 'pill';
export type BioBadgeColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export type BioBadgeBorder = boolean;
@Component({
    selector: 'bio-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioBadgeComponent {
    @Input() size!: BioBadgeSize;
    @Input() shape!: BioBadgeShape;
    @Input() color!: BioBadgeColor;
    @Input() border!: BioBadgeBorder;

    addClass() {
        return {
            'inline-flex items-center gap-x-1.5 text-xs font-medium': true,
            'px-2 py-1': this.size === 'normal',
            'px-1.5 py-0.5': this.size === 'small',
            'rounded-full': this.shape === 'pill',
            'rounded-md': this.shape === 'flat',
            'bg-gray-50 text-gray-600': this.color === 'gray',
            'bg-red-50 text-red-700': this.color === 'red',
            'bg-yellow-50 text-yellow-800': this.color === 'yellow',
            'bg-green-50 text-green-700': this.color === 'green',
            'bg-blue-50 text-blue-700': this.color === 'blue',
            'bg-indigo-50 text-indigo-700': this.color === 'indigo',
            'bg-purple-50 text-purple-700': this.color === 'purple',
            'bg-pink-50 text-pink-700': this.color === 'pink',
            'ring-1 ring-inset': this.border === true,
            'ring-gray-500/10': this.color === 'gray' && this.border === true,
            'ring-red-600/10': this.color === 'red' && this.border === true,
            'ring-yellow-600/20': this.color === 'yellow' && this.border === true,
            'ring-green-600/20': this.color === 'green' && this.border === true,
            'ring-blue-700/10': this.color === 'blue' && this.border === true,
            'ring-indigo-700/10': this.color === 'indigo' && this.border === true,
            'ring-purple-700/10': this.color === 'purple' && this.border === true,
            'ring-pink-700/10': this.color === 'pink' && this.border === true,
        }
    }

}
