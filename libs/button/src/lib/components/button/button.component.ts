import { Component, ChangeDetectionStrategy, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'button[bio-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioButtonComponent implements OnInit, OnDestroy {
  @Input() text = 'Button Text';
  @Input() color!: 'primary' | 'secondary' | 'white';
  @Input() size!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  @Input() disabled = false;
  @Input() type!: 'button' | 'reset' | 'submit';
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

    if (this.disabled) {
      this.elementRef.nativeElement.classList.remove(...['primary', 'secondary', 'white']);
      this.elementRef.nativeElement.classList.add('bio-button-disabled');
      this.elementRef.nativeElement.setAttribute('disabled', 'true');
    }

    if (this.type) {
      this.elementRef.nativeElement.setAttribute('type', this.type);
    }

  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
