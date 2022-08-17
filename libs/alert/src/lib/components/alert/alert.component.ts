import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
    selector: 'bio-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioAlertComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}
