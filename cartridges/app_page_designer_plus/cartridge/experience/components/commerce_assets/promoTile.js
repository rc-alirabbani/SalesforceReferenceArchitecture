'use strict';

/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for storefront.imageAndText component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.promoID = content.promoID ? content.promoID : null;
    model.image = ImageTransformation.getScaledImage(content.image);
    model.imageURL = content.imageURL ? content.imageURL : '#';
    model.headerText = content.headerText ? content.headerText : null;
    model.modalDetails = content.modalDetails ? content.modalDetails : null;
    model.bodyText = content.bodyText ? content.bodyText : null;
    model.ctaOneText = content.ctaOneText ? content.ctaOneText : null;
    model.ctaOneURL = content.ctaOneURL ? content.ctaOneURL : '#';
    model.ctaTwoText = content.ctaTwoText ? content.ctaTwoText : null;
    model.ctaThreeText = content.ctaThreeText ? content.ctaThreeText : null;
    model.leftLabel = content.leftLabel ? content.leftLabel : null;
    model.rightLabel = content.rightLabel ? content.rightLabel : null;
    model.pif = content.pif ? content.pif : null;

    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/promoTile').render(model).text;
};
