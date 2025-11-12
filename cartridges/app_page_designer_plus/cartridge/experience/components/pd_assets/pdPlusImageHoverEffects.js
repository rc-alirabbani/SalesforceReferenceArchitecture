'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusImageHoverEffects component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
var UUIDUtils = require('dw/util/UUIDUtils');

/**
 * Render logic for pdPlusImageHoverEffects component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    var tileUUID = 'videoModal_' + UUIDUtils.createUUID();

    /* If Checkbox is true then imageHoverEffectType is concluding */
    if (content.isHover === true) {
        model.isHover = '';
        /* Select Dropdown */
        if (content.imageHoverEffectType) {
            model.imageHoverEffectType = content.imageHoverEffectType;
        }
    } else if (content.isHover === undefined || content.isHover === false) {
        model.isHover = 'gallery-tiles';
        model.imageHoverEffectType = '';
    }

    /* Image Scale on Hover Checkbox */
    model.imgScaleHover = content.imgScaleHover;
    model.isAbsoluteLayout = content.isAbsoluteLayout ? 'captionAbsoluteLayout' : '';
    model.tilesLink = content.tilesLink ? content.tilesLink : '#';
    model.tilesLinkText = content.tilesLinkText;
    model.minWidth = content.minWidth ? content.minWidth : null;
    model.minWidthImage = content.minWidthImage ? content.minWidthImage : null;
    model.imageRadius = content.imageRadius ? content.imageRadius : null;

    if (content.linkBoxItem) {
        model.linkBoxItem = content.linkBoxItem;
    } else {
        model.linkBoxItem = '#';
    }

    model.boxNewtab = content.boxNewtab;

    /* Asset Heading 1 Style */
    
    model.h1Configurations = {
        font: content.h1Font ? content.h1Font : null,
        fontSize: content.fontTextSize ? content.fontTextSize : '1em',
        marginHeading: content.fontMargin ? content.fontMargin : '0',
        paddingHeading: content.fontPadding ? content.fontPadding : '0',
        fontColor: content.h1FontColor ? content.h1FontColor : '#000',
        fontWeight: content.h1FontWeight ? content.h1FontWeight : null,
        fontShadow: content.h1FontShadow ? content.h1FontShadow : null,
        fontSpacing: content.h1LetterSpacing ? content.h1LetterSpacing : null,
        fontHeight: content.h1LineHeight ? content.h1LineHeight : null
    };

    /* Asset Paragraph 1 Style */
    model.para1Configurations = {
        font: content.para1Font ? content.para1Font : null,
        fontSize: content.para1TextSize ? content.para1TextSize : '1em',
        marginHeading: content.para1Margin ? content.para1Margin : '0',
        paddingHeading: content.para1Padding ? content.para1Padding : '0',
        fontColor: content.para1Color ? content.para1Color : '#000',
        fontWeight: content.para1Weight ? content.para1Weight : null,
        para1Shadow: content.para1FontShadow ? content.para1FontShadow : null,
        paraFontSpacing: content.para1LetterSpacing ? content.para1LetterSpacing : null,
        paraFontHeight: content.para1LineHeight ? content.para1LineHeight : null,
    };

    /* Button Style */
    model.assetCTABorderRadius = content.assetCTABorderRadius ? content.assetCTABorderRadius : '0px';
    model.assetCTALabel = content.assetCTALabel ? content.assetCTALabel : null;
    // model.assetCTATitle = content.assetCTATitle ? content.assetCTATitle : null;
    // model.assetCTAURL = content.assetCTAURL ? content.assetCTAURL : null;
    model.tilesLink = content.tilesLink ? content.tilesLink : '#';
    model.tilesLinkText = content.tilesLinkText;

    model.assetCTABgColor = content.assetCTABgColor ? content.assetCTABgColor : '#ee2e23';
    model.assetCTATextColor = content.assetCTATextColor ? content.assetCTATextColor : '#ffffff';

    model.assetCTAHoverBgColor = content.assetCTAHoverBgColor ? content.assetCTAHoverBgColor : '#ee2e23';
    model.assetCTAHoverTextColor = content.assetCTAHoverTextColor ? content.assetCTAHoverTextColor : '#ffffff';

    if (content.tilesBgColor || content.tilesTextColor) {
        model.figCaptionStyle = 'style="';
        model.figCaptionStyle += 'background-color: ' + content.tilesBgColor + ';';
        model.figCaptionStyle += 'color: ' + content.tilesTextColor + ';';
        model.figCaptionStyle += '"';
    }

    if (content.imgBlur || content.imgBrightness || content.imgContrast || content.imgShadow || content.imgHue || content.imgInvert || content.imgOpacity || content.imgSaturate || content.imgSepia) {
        model.styleCSSFilters = 'style="filter: ';
        model.styleCSSFilters += content.imgBlur ? 'blur(5px)' : '';
        model.styleCSSFilters += content.imgBrightness ? 'brightness(200%)' : '';
        model.styleCSSFilters += content.imgContrast ? 'contrast(200%)' : '';
        model.styleCSSFilters += content.imgShadow ? 'drop-shadow(8px 8px 10px gray)' : '';
        model.styleCSSFilters += content.imgHue ? 'hue-rotate(90deg)' : '';
        model.styleCSSFilters += content.imgInvert ? 'invert(100%)' : '';
        model.styleCSSFilters += content.imgOpacity ? 'opacity(30%)' : '';
        model.styleCSSFilters += content.imgSaturate ? 'saturate(8)' : '';
        model.styleCSSFilters += content.imgSepia ? 'sepia(100%)' : '';
        model.styleCSSFilters += '"';
    }

    model.tileID = tileUUID;

    /* Image File Uploader */
    if (content.imgSrc) {
        /* Image File Alt Text */
        model.imgAlt = content.imgAlt ? content.imgAlt : '';

        model.imgSrc = {
            src: {
                mobile: ImageTransformation.url(content.imgSrc, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.imgSrc, { device: 'desktop' })
            },
            alt: model.imgAlt,
            focalPointX: (content.imgSrc.focalPoint.x * 100) + '%',
            focalPointY: (content.imgSrc.focalPoint.y * 100) + '%'
        };
    }

    /* Object Fit Image */
    if (content.imgObjectFit === 'fill') {
        model.imgObjectFit = 'fill';
    } else if (content.imgObjectFit === 'contain') {
        model.imgObjectFit = 'contain';
    } else if (content.imgObjectFit === 'cover') {
        model.imgObjectFit = 'cover';
    } else if (content.imgObjectFit === 'scale-down') {
        model.imgObjectFit = 'scale-down';
    }

    /* Flex Direction */
    if (content.flexDirection === 'row') {
        model.flexDirection = 'row';
    } else if (content.flexDirection === 'column') {
        model.flexDirection = 'column';
    }

    /* Flex Wrap */
    if (content.flexWrap === 'wrap') {
        model.flexWrap = 'wrap';
    } else if (content.flexWrap === 'nowrap') {
        model.flexWrap = 'nowrap';
    }

    /* Text Position Horizontally */
    if (content.posX === 'start') {
        model.posX = 'start';
    } else if (content.posX === 'center') {
        model.posX = 'center';
    } else if (content.posX === 'end') {
        model.posX = 'end';
    } else if (content.posX === 'between') {
        model.posX = 'between';
    } else if (content.posX === 'around') {
        model.posX = 'around';
    }

    /* Text Position Vertically */
    if (content.posY === 'start') {
        model.posY = 'start';
    } else if (content.posY === 'center') {
        model.posY = 'center';
    } else if (content.posY === 'end') {
        model.posY = 'end';
    } else if (content.posY === 'baseline') {
        model.posY = 'baseline';
    } else if (content.posY === 'stretch') {
        model.posY = 'stretch';
    }

    /* Image Title */
    model.imgTitle = content.imgTitle ? content.imgTitle : null;

    /* Image Paragraph */
    model.imgParagraph = content.imgParagraph ? content.imgParagraph : null;

    return new Template('experience/components/pd_assets/pdPlusImageHoverEffects').render(model).text;
};
