import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'bio-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioTextInputComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}
