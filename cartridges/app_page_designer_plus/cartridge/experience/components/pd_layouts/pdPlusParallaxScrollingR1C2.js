'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for the pd_layouts.pdPlusGrid 2 Row x 1 Col (Mobile), PD Plus 1 Row x 2 Col (Desktop)
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var component = context.component;

    var content = context.content;
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';


    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }
    model.bgComponentColor += '"';


    if (content.backgroundImage) {
        /* Image File Alt Text */
        model.imageAlt = content.imageAlt ? content.imageAlt : '';

        model.backgroundImage = {
            src: {
                mobile: ImageTransformation.url(content.backgroundImage, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.backgroundImage, { device: 'desktop' })
            },
            alt: model.imgAlt,
            focalPointX: (content.backgroundImage.focalPoint.x * 100) + '%',
            focalPointY: (content.backgroundImage.focalPoint.y * 100) + '%'
        };
    }
    
    /* Layout  */

    /* parallax SectionHeight  */
    model.sectionHeight = content.sectionHeight ? content.sectionHeight : '';
    /* parallax Section Type  */

    if (content.parallaxSection === 'Parallax') {
        model.parallaxSection = 'section-background';
    } else if (content.parallaxSection === 'Normal') {
        model.parallaxSection = 'sectionFixed';
    }
    
    /* shadow on text  */
    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    /* Column 1 */
    model.ParallaxScrTextSectionR1C1 = content.ParallaxScrTextSectionR1C1 ? content.ParallaxScrTextSectionR1C1 : '';
    model. ParallaxScrHdSectionR1C1 = content.ParallaxScrHdSectionR1C1 ? content.ParallaxScrHdSectionR1C1 : null;
    model.ParallaxScrbtnR1C1 = content.ParallaxScrbtnR1C1? content.ParallaxScrbtnR1C1 : null;
    model.ParallaxScrimg= content.ParallaxScrimg ? content.ParallaxScrimg.file.url : null;
    model.TextSectionPaddingR1C1 = content.TextSectionPaddingR1C1? content.TextSectionPaddingR1C1 : '';

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = '#';
    }

    model.tileNewtab = content.tileNewtab;


    /* parallax text Alignment  */
    if (content.textAlignmentR1C1 === 'left') {
        model.textAlignmentR1C1 = 'text-start';
    } else if (content.textAlignmentR1C1 === 'right') {
        model.textAlignmentR1C1 = 'text-end';
    } else if (content.textAlignmentR1C1 === 'center') {
        model.textAlignmentR1C1 = 'text-center';
    }


    /* parallax Button  Color  */

    model.btnComponentColor = 'style="';

    if (content.btnbgColor) {
        model.btnComponentColor += 'background-color: ' + content.btnbgColor.value + '; ';
    }
    
    if (content.btntextColor) {
        model.btnComponentColor += 'color: ' + content.btntextColor.value + '; ';
    }

    if (content.btnBorderColor) {
        model.btnComponentColor += 'border-color: ' + content.btnBorderColor.value + '; ';
    }
    model.btnComponentColor += '"';

    /* parallax Section Text Color  */
    model.textContentColor = 'style="';
    
    if (content.textColor) {
        model.textContentColor += 'color: ' + content.textColor.value + '; ';
    }

    model.textContentColor += '"';

    /* End Column 1 */

    /* Column 2  */
    model.ParallaxScrTextSectionR1C2 = content.ParallaxScrTextSectionR1C2 ? content.ParallaxScrTextSectionR1C2 : '';
    model. ParallaxScrHdSectionR1C2 = content.ParallaxScrHdSectionR1C2 ? content.ParallaxScrHdSectionR1C2 : null;
    model.ParallaxScrbtnR1C2 = content.ParallaxScrbtnR1C2? content.ParallaxScrbtnR1C2 : null;

    model.TextSectionPaddingR1C2 = content.TextSectionPaddingR1C2? content.TextSectionPaddingR1C2 : '';

    if (content.tileLinkR1C2) {
        model.tileLinkR1C2 = content.tileLinkR1C2;
    } else {
        model.tileLinkR1C2 = '#';
    }

    model.tileNewtabR1C2 = content.tileNewtabR1C2;
 



    /* parallax text Alignment  */
    if (content.textAlignmentR1C2 === 'left') {
        model.textAlignmentR1C2 = 'text-start';
    } else if (content.textAlignmentR1C2 === 'right') {
        model.textAlignmentR1C2 = 'text-end';
    } else if (content.textAlignmentR1C2 === 'center') {
        model.textAlignment = 'text-center';
    }

    /* parallax Button  Color  */

    model.bgComponentColorR1C2 = 'style="';

    if (content.btnbgColorR1C2) {
        model.bgComponentColorR1C2 += 'background-color: ' + content.btnbgColorR1C2.value + '; ';
    }
    
    if (content.btntextColorR1C2) {
        model.bgComponentColorR1C2 += 'color: ' + content.btntextColorR1C2.value + '; ';
    }

    if (content.btnBorderColorR1C2) {
        model.bgComponentColorR1C2 += 'border-color: ' + content.btnBorderColorR1C2.value + '; ';
    }
    model.bgComponentColorR1C2 += '"';


    model.textContentColorR1C2 = 'style="';
    
    if (content.textColorR1C2) {
        model.textContentColorR1C2 += 'color: ' + content.textColorR1C2.value + '; ';
    }

    model.textContentColorR1C2 += '"';




    /* End Column 2  */

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

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusParallaxScrollingR1C2').render(model).text;
};
