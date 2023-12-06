// ==UserScript==
// @name         ibag 包包网站隐藏图片&无效内容
// @namespace    https://github.com/lenchou95/tampermonkey-plugin
// @version      0.1
// @description  Hide images, captions, H2 headings, additional content, and meta on a specific domain
// @author       You
// @match        https://bag.idai.ly/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Hide all images on the domain
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    // Hide all captions on the domain
    var captions = document.querySelectorAll('div.caption[align="center"]');
    for (var j = 0; j < captions.length; j++) {
        captions[j].style.display = 'none';
    }

    // Modify all H2 headings on the domain and remove leading/trailing " · "
    var h2Headings = document.querySelectorAll('h2 > span[style*="background-image:linear-gradient"]');
    for (var k = 0; k < h2Headings.length; k++) {
        h2Headings[k].innerText = '## ' + h2Headings[k].innerText.trim().replace(/^·|·$/g, '');
    }

    // Hide additional content on the domain
    var additionalContent = document.querySelectorAll('p.t12.grey, div.foot, p.pretitle, div.meta, p.subtitle');
    for (var l = 0; l < additionalContent.length; l++) {
        additionalContent[l].style.display = 'none';
    }

    // Hide navigation on the domain
    var navigation = document.querySelector('ul.nav');
    if (navigation) {
        navigation.style.display = 'none';
    }
})();
