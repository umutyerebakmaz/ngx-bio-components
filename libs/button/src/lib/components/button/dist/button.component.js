"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BioButtonComponent = void 0;
var core_1 = require("@angular/core");
var BioButtonComponent = /** @class */ (function () {
    function BioButtonComponent(elementRef, focusMonitor) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.disabled = false;
    }
    BioButtonComponent.prototype.ngOnInit = function () {
        var _a;
        this.focusMonitor.monitor(this.elementRef);
        if (this.color) {
            this.elementRef.nativeElement.classList.add("" + this.color);
            this.elementRef.nativeElement.classList.add("" + this.size);
        }
        if (this.disabled) {
            (_a = this.elementRef.nativeElement.classList).remove.apply(_a, ['primary', 'secondary', 'white']);
            this.elementRef.nativeElement.classList.add('bio-button-disabled');
            this.elementRef.nativeElement.setAttribute('disabled', 'true');
        }
        if (this.type) {
            this.elementRef.nativeElement.setAttribute('type', this.type);
        }
    };
    BioButtonComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    __decorate([
        core_1.Input()
    ], BioButtonComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], BioButtonComponent.prototype, "size");
    __decorate([
        core_1.Input()
    ], BioButtonComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], BioButtonComponent.prototype, "disabled");
    BioButtonComponent = __decorate([
        core_1.Component({
            selector: 'button[bio-button]',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], BioButtonComponent);
    return BioButtonComponent;
}());
exports.BioButtonComponent = BioButtonComponent;
