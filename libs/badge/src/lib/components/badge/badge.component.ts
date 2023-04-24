import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export type Badge = {
    size?: 'normal' | 'small';
    shape?: 'flat' | 'pill';
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    border?: boolean;
}

@Component({
    selector: 'bio-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioBadgeComponent implements OnInit {
    @Input() badge!: Badge;

    ngOnInit(): void {
        this.badge = {
            size: this.badge?.size || 'normal',
            shape: this.badge?.shape || 'flat',
            color: this.badge?.color || 'indigo',
            border: this.badge?.border || true,
        }
    }

    get addClass() {
        return {
            'inline-flex items-center gap-x-1.5 text-xs font-medium': true,
            'px-2 py-1': this.badge.size === 'normal',
            'px-1.5 py-0.5': this.badge.size === 'small',
            'rounded-full': this.badge.shape === 'pill',
            'rounded-md': this.badge.shape === 'flat',
            // color
            'bg-gray-50 text-gray-600': this.badge.color === 'gray',
            'bg-red-50 text-red-700': this.badge.color === 'red',
            'bg-yellow-50 text-yellow-800': this.badge.color === 'yellow',
            'bg-green-50 text-green-700': this.badge.color === 'green',
            'bg-blue-50 text-blue-700': this.badge.color === 'blue',
            'bg-indigo-50 text-indigo-700': this.badge.color === 'indigo',
            'bg-purple-50 text-purple-700': this.badge.color === 'purple',
            'bg-pink-50 text-pink-700': this.badge.color === 'pink',
            // border
            "ring-1 ring-inset ring-gray-500/10": this.badge.color === 'gray' && this.badge.border === true,
            'ring-1 ring-inset ring-red-600/10': this.badge.color === 'red' && this.badge.border === true,
            'ring-1 ring-inset ring-yellow-600/20': this.badge.color === 'yellow' && this.badge.border === true,
            'ring-1 ring-inset ring-green-600/2': this.badge.color === 'green' && this.badge.border === true,
            'ring-1 ring-inset ring-blue-700/10': this.badge.color === 'blue' && this.badge.border === true,
            'ring-1 ring-inset ring-indigo-700/10': this.badge.color === 'indigo' && this.badge.border === true,
            'ring-1 ring-inset ring-purple-700/10': this.badge.color === 'purple' && this.badge.border === true,
            'ring-1 ring-inset ring-pink-700/10': this.badge.color === 'pink' && this.badge.border === true,
        }
    }

}
