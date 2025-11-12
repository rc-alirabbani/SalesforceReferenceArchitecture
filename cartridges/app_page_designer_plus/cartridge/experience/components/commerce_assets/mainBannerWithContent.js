"use strict";

/* global response */

var Template = require("dw/util/Template");
var HashMap = require("dw/util/HashMap");
var URLUtils = require("dw/web/URLUtils");
var ImageTransformation = require("*/cartridge/experience/utilities/ImageTransformation.js");

/**
 * Render logic for the storefront.MainBanner component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
	var model = modelIn || new HashMap();
	var content = context.content;

	model.cssClassNameMB = content.cssClassNameMB;
	model.aosAnimationMB = content.aosAnimationMB;
	model.heading = content.heading;
	model.bannerClass = content.bannerClass ? content.bannerClass : "";
	model.image = ImageTransformation.getScaledImage(content.image);
	model.imgAlt = content.imgAlt ? content.imgAlt : "";
	model.imageMob = ImageTransformation.getScaledImage(content.imageMob);
	model.imgAltMob = content.imgAltMob ? content.imgAltMob : "";
	model.acimaBtnText = content.acimaBtnText ? content.acimaBtnText : "";
	model.acimaBtnLink = content.acimaBtnLink ? content.acimaBtnLink : "";
	model.getStartedModal = content.getStartedModal;

	// instruct 24 hours relative pagecache
	var expires = new Date();
	expires.setDate(expires.getDate() + 1); // this handles overflow automatically
	response.setExpires(expires);

	return new Template(
		"experience/components/commerce_assets/mainBannerWithContent"
	).render(model).text;
};
