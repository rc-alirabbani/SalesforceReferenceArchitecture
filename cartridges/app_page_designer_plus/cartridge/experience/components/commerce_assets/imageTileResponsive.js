'use strict';

/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the storefront.photoTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.image = ImageTransformation.getScaledImage(content.image);
    model.imageAlt = content.imageAlt ? content.imageAlt: 'Desktop image alt';
    model.imageMob = ImageTransformation.getScaledImage(content.imageMob);
    model.imageMobAlt = content.imageMobAlt ? content.imageMobAlt: 'Mobile image alt';

    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/imageTileResponsive').render(model).text;
};
