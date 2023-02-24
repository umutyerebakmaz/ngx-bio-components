import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioTooltipComponent } from './tooltip.component';
describe('TooltipComponent', () => {
    let component: BioTooltipComponent;
    let fixture: ComponentFixture<BioTooltipComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioTooltipComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(BioTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
