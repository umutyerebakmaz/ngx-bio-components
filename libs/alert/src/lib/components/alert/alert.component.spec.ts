import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioAlertComponent } from './alert.component';
describe('AlertComponent', () => {
    let component: BioAlertComponent;
    let fixture: ComponentFixture<BioAlertComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioAlertComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(BioAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
