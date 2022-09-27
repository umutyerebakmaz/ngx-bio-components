import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioBadgeComponent } from './badge.component';
describe('BadgeComponent', () => {
    let component: BioBadgeComponent;
    let fixture: ComponentFixture<BioBadgeComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioBadgeComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(BioBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
