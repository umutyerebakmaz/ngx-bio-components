import { Component, ChangeDetectionStrategy, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
@Component({
  selector: 'button[bio-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    if (this.color) {
      this.elementRef.nativeElement.classList.add(`${this.color}`);
      this.elementRef.nativeElement.classList.add(`${this.size}`);
    }
    if (!this.color && !this.size) {
      this.elementRef.nativeElement.classList.add('primary');
      this.elementRef.nativeElement.classList.add('md');
    }
    if (this.disabled) {
      this.elementRef.nativeElement.classList.add('disabled');
      this.elementRef.nativeElement.setAttribute('disabled', 'disabled');

    }
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
