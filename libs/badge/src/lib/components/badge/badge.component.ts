import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type Badge = {
    size?: 'basic' | 'large';
    dot?: boolean;
    shape?: 'basic' | 'rounded';
    removeButton?: false;
}

@Component({
    selector: 'bio-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioBadgeComponent {

    @Input() badge!: Badge;
}
