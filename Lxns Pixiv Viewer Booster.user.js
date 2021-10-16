// ==UserScript==
// @name         Lxns Pixiv Viewer Booster
// @namespace    https://www.widecss.cn/
// @version      0.9
// @description  为 Lxns 的 Pixiv Viewer 添加一个按扭, 用于跳转到原地址
// @author       Widecss
// @homepage     https://github.com/Widecss/Widecss-tampermonkey-script
// @supportURL   https://github.com/Widecss/Widecss-tampermonkey-script/issues
// @match        https://pixiv.lxns.org/artworks/*
// @match        https://pixiv.lxns.org/i/*
// @icon         https://pixiv.lxns.org/static/favicon.png
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js
// @grant        none
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';

    // Some Constant
    const PIXIV_URL = 'https://www.pixiv.net/artworks/';
    const BUTTON_ID = 'origin-link-button';
    const TEXT_CENTER_CLASS = 'text-center';

    // Add Button
    function addButton(textCenter) {
        textCenter.append(
            '<button id="' + BUTTON_ID + '" type="button" class="mx-2 v-btn v-btn--icon v-btn--round v-btn--tile theme--light v-size--default" style="width: 76px; padding-right:8px;">' +
            '    <span class="v-btn__content">' +
            '        <i data-v-579691c5="" aria-hidden="true" class="v-icon notranslate mdi mdi-link theme--light">' +
            '        </i>' +
            '    </span>' +
            '    原链' +
            '</button>'
        );
        $('#' + BUTTON_ID).bind('click', () => {
            let url = window.location.pathname;
            if(url.startsWith('/i')){
                let pixiv_id = url.substring(10);
                window.location.href = PIXIV_URL + pixiv_id;
            }
            if(url.startsWith('/artworks')){
                let pixiv_id = url.substring(10);
                window.location.href = PIXIV_URL + pixiv_id;
            }
        });
    }
    setInterval(function () {
        let textCenter = $('.' + TEXT_CENTER_CLASS);
        if(textCenter.length > 0){
            let button = $('#' + BUTTON_ID);
            if(button.length === 0) {
                addButton(textCenter, button);
            }
        }
    }, 100);
})();
