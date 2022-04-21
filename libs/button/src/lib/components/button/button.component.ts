import { Component, ChangeDetectionStrategy, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
@Component({
  selector: '[bio-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bio-btn-primary]': 'color === "primary"',
    '[class.bio-btn-secondary]': 'color === "secondary"',
    '[class.bio-btn-white]': 'color === "white"',
    '[class.xs-btn]': 'size === "xs"',
    '[class.sm-btn]': 'size === "sm"',
    '[class.md-btn]': 'size === "md"',
    '[class.lg-btn]': 'size === "lg"',
    '[class.xl-btn]': 'size === "xl"',
  }
})
export class BioButtonComponent implements OnInit, OnDestroy {
  @Input() color!: 'primary' | 'secondary' | 'white';
  @Input() size!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  @Input() icon!: 'leading' | 'trailing';
  @Input() disabled!: boolean;

  constructor(
    private readonly elementRef: ElementRef<HTMLButtonElement>,
    private readonly focusMonitor: FocusMonitor
  ) {}

  ngOnInit(): void {
    this.focusMonitor.monitor(this.elementRef);
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
