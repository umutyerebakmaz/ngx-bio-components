import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: '[bio-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioButtonComponent {
  @Input() color!: 'primary' | 'secondary' | 'white';
  @Input() disabled!: boolean;
}
