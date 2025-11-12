'use strict';

/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');

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

    model.textHeadline = content.textHeadline ? content.textHeadline : null;
    model.tileLink = content.tileLink ? content.tileLink : null;
    model.displayName = content.displayName ? content.displayName : null;
    model.image = content.image ? content.image : null;
    model.customClass = content.customClass ? content.customClass : null;


    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/marketingTile').render(model).text;
};
