'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusVideoComponent component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
var UUIDUtils = require('dw/util/UUIDUtils');


/**
 * Render logic for pdPlusVideoComponent component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.videoID = content.videoID;

    if (content.className) {
        model.className = content.className;
    } else {
        model.className = '';
    }


    if (content.videoPoster) {
        /* Image File Alt Text */
        model.imgAlt = content.imgAlt ? content.imgAlt : '';


        model.videoPoster = ImageTransformation.getScaledImage(content.videoPoster);
    }

    return new Template('experience/components/commerce_assets/youtubeVideo').render(model).text;
};
