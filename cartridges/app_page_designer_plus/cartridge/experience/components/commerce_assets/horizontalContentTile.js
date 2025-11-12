'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
/**
 * Render logic for the storefront.photoTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.imgFile = ImageTransformation.getScaledImage(content.imgFile);
    model.imgAlt = content.imgAlt ? content.imgAlt : '';
    model.headingText = content.headingText ? content.headingText : '';
    model.richText = content.richText ? content.richText : '';
    
    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    if(content.buttonText) {
        model.buttonText = content.buttonText;
    }

    return new Template('experience/components/commerce_assets/horizontalContentTile').render(model).text;
};
