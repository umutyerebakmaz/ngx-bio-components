import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export type Badge = {
    size?: 'basic' | 'large' | undefined;
    shape?: 'basic' | 'rounded';
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    text?: string;
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
        this.badge.size = this.badge.size || 'basic';
        this.badge.shape = this.badge.shape || 'basic';
        this.badge.color = this.badge.color || 'indigo';
        this.badge.text = this.badge.text || 'Text';

    }

    get addClass() {
        return {
            'px-2.5 py-0.5 text-sx': this.badge.size === 'basic',
            'px-3 py-0.5 text-sm': this.badge.size === 'large',
            'rounded-full': this.badge.shape === 'basic',
            'rounded': this.badge.shape === 'rounded',
            'bg-gray-100 text-gray-800': this.badge.color === 'gray',
            'bg-red-100 text-red-800': this.badge.color === 'red',
            'bg-yellow-100 text-yellow-800': this.badge.color === 'yellow',
            'bg-green-100 text-green-800': this.badge.color === 'green',
            'bg-blue-100 text-blue-800': this.badge.color === 'blue',
            'bg-indigo-100 text-indigo-800': this.badge.color === 'indigo',
            'bg-purple-100 text-purple-800': this.badge.color === 'purple',
            'bg-pink-100 text-pink-800': this.badge.color === 'pink',
        }
    }
}
