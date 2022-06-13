import { asNativeElements } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioButtonComponent } from './button.component';

describe('BioButtonComponent', () => {
    let component: BioButtonComponent;
    let fixture: ComponentFixture<BioButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioButtonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
