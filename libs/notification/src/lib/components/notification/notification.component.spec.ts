import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioNotificationComponent } from './notification.component';
describe('NotificationComponent', () => {
    let component: BioNotificationComponent;
    let fixture: ComponentFixture<BioNotificationComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioNotificationComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(BioNotificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
