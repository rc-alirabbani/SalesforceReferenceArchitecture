'use strict';

/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the storefront.popularCategories.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;
    model.blogHeading = content.blogHeading ? content.blogHeading : "";
    model.blogDate = content.blogDate ? content.blogDate : "";
    model.blogImage = ImageTransformation.getScaledImage(content.blogImage);
    model.blogImageAlt = content.blogImageAlt ? content.blogImageAlt : "";
    model.blogDetail = content.blogDetail ? content.blogDetail : "";

    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/blogDetail').render(model).text;
};
