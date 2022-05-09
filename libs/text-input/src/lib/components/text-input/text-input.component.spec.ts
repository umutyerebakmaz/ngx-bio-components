import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioTextInputComponent } from './text-input.component';
describe('TextInputComponent', () => {
    let component: BioTextInputComponent;
    let fixture: ComponentFixture<BioTextInputComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioTextInputComponent],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(BioTextInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
