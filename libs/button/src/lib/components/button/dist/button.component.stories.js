"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.white = exports.secondary = exports.primary = void 0;
var button_module_1 = require("../../button.module");
exports["default"] = {
    title: 'Button'
};
var Template = function (args) { return ({
    moduleMetadata: {
        imports: [button_module_1.BioButtonModule]
    },
    template: "\n<button bio-button [color]=\"color\" [size]=\"size\" [disabled]=\"disabled\" [type]=\"type\">\nBio Button Text\n</button>",
    props: __assign({}, args)
}); };
exports.primary = Template.bind({});
exports.primary.args = {
    color: 'primary',
    size: "md",
    type: 'button'
};
exports.secondary = Template.bind({});
exports.secondary.args = {
    color: 'secondary',
    size: 'md',
    type: 'submit',
    disabled: false
};
exports.white = Template.bind({});
exports.white.args = {
    color: 'white',
    size: 'md',
    type: 'reset'
};
