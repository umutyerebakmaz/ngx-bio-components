"use strict";
exports.__esModule = true;
exports.Circular = exports.Round = exports.TrailingIcon = exports.LeadingIcon = exports.White = exports.Secondary = exports.Primary = void 0;
var angular_1 = require("@storybook/angular");
var button_module_1 = require("../../button.module");
var button_component_1 = require("./button.component");
exports["default"] = {
    title: 'BioButtonComponent',
    component: button_component_1.BioButtonComponent,
    decorators: [
        angular_1.moduleMetadata({
            imports: [button_module_1.BioButtonModule]
        })
    ]
};
var Template = function (args) { return ({
    props: args
}); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    color: 'primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    color: 'secondary'
};
exports.White = Template.bind({});
exports.White.args = {
    color: 'white'
};
exports.LeadingIcon = Template.bind({});
exports.LeadingIcon.args = {};
exports.TrailingIcon = Template.bind({});
exports.TrailingIcon.args = {};
exports.Round = Template.bind({});
exports.Round.args = {};
exports.Circular = Template.bind({});
exports.Circular.args = {};
