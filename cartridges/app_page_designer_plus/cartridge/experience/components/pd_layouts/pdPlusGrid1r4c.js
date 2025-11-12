'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');


/**
 * Render logic for the pd_layouts.pdPlusGrid1row4column.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;

    var content = context.content;
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';
    model.maxWidth = content.maxWidth ? content.maxWidth : '';

    /* Vertical Position of text Container if found then concatenate its Class Name */
    if (content.verticalAlignment === 'top') {
        model.verticalAlignment = 'start';
    } else if (content.verticalAlignment === 'center') {
        model.verticalAlignment = 'center';
    } else if (content.verticalAlignment === 'bottom') {
        model.verticalAlignment = 'end';
    }

    /* Horizontal Position of text Container if found then concatenate its Class Name */
    if (content.horizontalAlginment === 'left') {
        model.horizontalAlginment = 'start';
    } else if (content.horizontalAlginment === 'center') {
        model.horizontalAlginment = 'center';
    } else if (content.horizontalAlginment === 'right') {
        model.horizontalAlginment = 'end';
    }

    if (content.bgImageParallax === 'Parallax') {
        model.bgImageParallax = 'parallax-bg';
    } else if (content.bgImageParallax === 'Normal') {
        model.bgImageParallax = 'normal-bg';
    }

    model.BGImageProperties = 'style="';
    if (content.backgroundImage) {
        model.BGImageProperties += 'background-image: url(' + content.backgroundImage.file.url + ');';
    }

    if (content.bgGradiant) {
        model.BGImageProperties += 'background-image: ' + content.bgGradiant + '; ';
    }

    if (content.sectionHeight) {
        model.BGImageProperties += 'min-height: ' + content.sectionHeight + '; ';
    }
    
    if (content.backgroundColor) {
        model.BGImageProperties += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.BGImageProperties += 'opacity: ' + content.backgroundColorAlpha + '%' + ';';
    }
    model.BGImageProperties += '"';

    model.paddingZero = content.paddingZero;
    model.removeGutter = content.removeGutter;

    /* Margin | Padding Settings */
    model.UILayout = 'style="';
    model.UILayout += 'padding-top: ' + (content.setPaddingTop ? content.setPaddingTop : '0');
    model.UILayout += '; padding-right: ' + (content.setPaddingRight ? content.setPaddingRight : '0');
    model.UILayout += '; padding-bottom: ' + (content.setPaddingBottom ? content.setPaddingBottom : '0');
    model.UILayout += '; padding-left: ' + (content.setPaddingLeft ? content.setPaddingLeft : '0');
    model.UILayout += '; margin-top: ' + (content.setMarginTop ? content.setMarginTop : '0');
    model.UILayout += '; margin-right: ' + (content.setMarginRight ? content.setMarginRight : '0');
    model.UILayout += '; margin-bottom: ' + (content.setMarginBottom ? content.setMarginBottom : '0');
    model.UILayout += '; margin-left: ' + (content.setMarginLeft ? content.setMarginLeft : '0');
    model.UILayout += ';"';

    /* Automatically register configured regions */
    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusGrid1r4c').render(model).text;
};
