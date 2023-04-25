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
            'text-gray-600': this.color === 'gray',
            'text-red-700': this.color === 'red',
            'text-yellow-800': this.color === 'yellow',
            'text-green-700': this.color === 'green',
            'text-blue-700': this.color === 'blue',
            'text-indigo-700': this.color === 'indigo',
            'text-purple-700': this.color === 'purple',
            'text-pink-700': this.color === 'pink',
            'bg-gray-100': this.color === 'gray' && this.border === false,
            'bg-red-100': this.color === 'red' && this.border === false,
            'bg-yellow-100': this.color === 'yellow' && this.border === false,
            'bg-green-100': this.color === 'green' && this.border === false,
            'bg-blue-100': this.color === 'blue' && this.border === false,
            'bg-indigo-100': this.color === 'indigo' && this.border === false,
            'bg-purple-100': this.color === 'purple' && this.border === false,
            'bg-pink-100': this.color === 'pink' && this.border === false,
            'ring-1 ring-inset': this.border === true,
            'bg-gray-50 ring-gray-500/10': this.color === 'gray' && this.border === true,
            'bg-red-50 ring-red-600/10': this.color === 'red' && this.border === true,
            'bg-yellow-50 ring-yellow-600/20': this.color === 'yellow' && this.border === true,
            'bg-green-50 ring-green-600/20': this.color === 'green' && this.border === true,
            'bg-blue-50 ring-blue-700/10': this.color === 'blue' && this.border === true,
            'bg-indigo-50 ring-indigo-700/10': this.color === 'indigo' && this.border === true,
            'bg-purple-50 ring-purple-700/10': this.color === 'purple' && this.border === true,
            'bg-pink-50 ring-pink-700/10': this.color === 'pink' && this.border === true,
        }
    }

}
