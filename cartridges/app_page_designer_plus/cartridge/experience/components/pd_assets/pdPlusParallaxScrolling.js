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

    model.isContainer = content.isContainer ? 'container-fluid' : 'container';

    model.ParallaxScrTextSection = content.ParallaxScrTextSection ? content.ParallaxScrTextSection : '';
    model. ParallaxScrBannerHeading = content.ParallaxScrBannerHeading ? content.ParallaxScrBannerHeading : '';
    model.ParallaxScrbtn = content.ParallaxScrbtn? content.ParallaxScrbtn : null;
    model.ParallaxScrimg= content.ParallaxScrimg ? content.ParallaxScrimg.file.url : null;
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';


    /* HeadingType  */

    if (content.parallaxSectionheading === 'large heading') {
        model.parallaxSectionheading = 'bannerHeading';
    } else if (content.parallaxSectionheading === 'Small Heading') {
        model.parallaxSectionheading = 'NormalHeading';
    }

   
    /* parallax Section Type  */

    if (content.parallaxSection === 'Parallax') {
        model.parallaxSection = 'section-background';
    } else if (content.parallaxSection === 'Normal') {
        model.parallaxSection = 'sectionFixed';
    }
    

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%' + ';';
    }
    model.bgComponentColor += '"';

    /* shadow on text  */
    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    // New tab

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = '#';
    }

    model.tileNewtab = content.tileNewtab;

    /* parallax SectionHeight  */
    model.sectionHeight = content.sectionHeight ? content.sectionHeight : '';
    model.sectionWidth = content.sectionWidth ? content.sectionWidth : '';

    /* parallax Heading Alignment  */
    if (content.hdAlignment === 'left') {
        model.hdAlignment = 'text-start';
    } else if (content.hdAlignment === 'right') {
        model.hdAlignment = 'text-end';
    } else if (content.hdAlignment === 'center') {
        model.hdAlignment = 'text-center';
    }

    /* parallax text Alignment  */
    if (content.textAlignment === 'left') {
        model.textAlignment = 'text-start';
    } else if (content.textAlignment === 'right') {
        model.textAlignment = 'text-end';
    } else if (content.textAlignment === 'center') {
        model.textAlignment = 'text-center';
    }

    /* parallax Column Alignment  */
    if (content.setColumnPosition === 'left') {
        model.setColumnPosition = 'justify-content-start';
    } else if (content.setColumnPosition === 'right') {
        model.setColumnPosition = 'justify-content-end';
    } else if (content.setColumnPosition === 'center') {
        model.setColumnPosition = 'justify-content-center';
    }

    /* List Item columns col1 col2 */
    if (content.listItemTwoCol === 'list 1 Column') {
        model.listItemTwoCol = 'list-1Cal';
    } else if (content.listItemTwoCol === 'list 2 Column') {
        model.listItemTwoCol = 'list-2Cal';
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

    /* parallax text Alignment  */
    if (content.overlaydispaly === 'Daplay') {
        model.overlaydispaly = 'd-block';
    } else if (content.overlaydispaly === 'Overlay hide') {
        model.overlaydispaly = 'd-none';
    }

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

    return new Template('experience/components/pd_assets/pdPlusParallaxScrolling').render(model).text;
};
