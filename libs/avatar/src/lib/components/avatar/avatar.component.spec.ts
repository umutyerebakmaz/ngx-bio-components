import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioAvatarComponent } from './avatar.component';
describe('AvatarComponent', () => {
    let component: BioAvatarComponent;
    let fixture: ComponentFixture<BioAvatarComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BioAvatarComponent],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(BioAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
