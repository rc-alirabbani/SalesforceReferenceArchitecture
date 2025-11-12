'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusAccordion component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');


/**
 * Render logic for pdPlusAccordions component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();


    model.hideBorder = content.hideBorder ? content.hideBorder : false;
    model.hideBorderdetail = content.hideBorderdetail ? content.hideBorderdetail : false;
    model.itemHeadingTextColor = content.itemHeadingTextColor ? content.itemHeadingTextColor : '';
    model.itemHeadingBorderColor = content.itemHeadingBorderColor ? content.itemHeadingBorderColor : '';

    model.accodionItem = content.accodionItem ? content.accodionItem : '';
    model.accordionDetail = content.accordionDetail ? content.accordionDetail : '';
    
    model.collapsibleActive = content.collapsibleActive ? 'active' : '';
    model.customClass = content.customClass ? content.customClass : '';
    
    /* Heading 1 Style */
    
    model.h1Configurations = {
        font: content.h1Font ? content.h1Font : null,
        fontSize: content.fontTextSize ? content.fontTextSize : '1em',
        marginHeading: content.fontMargin ? content.fontMargin : '0',
        paddingHeading: content.fontPadding ? content.fontPadding : '0',
        fontColor: content.h1FontColor ? content.h1FontColor : '#000',
        fontWeight: content.h1FontWeight ? content.h1FontWeight : null,
        fontShadow: content.h1FontShadow ? content.h1FontShadow : null
    };


    model.para1Configurations = {
        font: content.para1Font ? content.para1Font : null,
        fontSize: content.para1TextSize ? content.para1TextSize : '1em',
        marginHeading: content.para1Margin ? content.para1Margin : '0',
        paddingHeading: content.para1Padding ? content.para1Padding : '0',
        fontColor: content.para1Color ? content.para1Color : '#000',
        fontWeight: content.para1Weight ? content.para1Weight : null,
        para1Shadow: content.para1FontShadow ? content.para1FontShadow : null
    };

    /* Collapisble detail Styling */
    model.itemDetailStyles = 'style="';

    if (content.itemdetailColor) {
        model.itemDetailStyles += 'color: ' + content.itemdetailColor.value + '; ';
    }

    model.itemDetailStyles += '"';

    /* Collapisble detail Styling */

    model.bgComponentColor = 'style="';

    if (content.itemHeadingbgColor) {
        model.bgComponentColor += 'background-color: ' + content.itemHeadingbgColor.value + '; ';
    }

    if (content.HeadingbgColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.HeadingbgColorAlpha + '%;';
    }

    if (content.itemHeadingTextColor) {
        model.bgComponentColor += 'color: ' + content.itemHeadingTextColor.value + '; ';
    }

    if (content.itemHeadingBorderColor) {
        model.bgComponentColor += 'border-color: ' + content.itemHeadingBorderColor.value + '; ';
    }

    model.bgComponentColor += '"';

    /* Border Radius of Buttons if found then concatenate its class name */
    if (content.accrBorderRadius === 'square') {
        model.accrBorderRadius = 'square-bordered';
    } else if (content.accrBorderRadius === 'rounded') {
        model.accrBorderRadius = 'rounded-bordered';
    } else if (content.accrBorderRadius === 'circled') {
        model.accrBorderRadius = 'circled-bordered';
    }

    

    return new Template('experience/components/pd_assets/pdPlusAccordion').render(model).text;
};
