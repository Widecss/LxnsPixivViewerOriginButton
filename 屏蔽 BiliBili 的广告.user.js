// ==UserScript==
// @name         屏蔽 BiliBili 的广告
// @namespace    https://github.com/Widecss/Widecss-tampermonkey-script
// @version      1.0
// @description  仅包含删除 BiliBili 首页出现的广告的功能
// @author       Widecss
// @match        https://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @connect      bilibili.com
// @grant        GM_xmlhttpRequest
// @license MIT
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        for (let card of document.getElementsByClassName('feed-card')) {
            if (card.getElementsByClassName("bili-video-card__info--ad").length > 0) {
                card.remove();
            }
        }
    }, 1000);
    setInterval(()=>{
        for (let card of document.getElementsByClassName('bili-video-card is-rcmd')) {
            if (card.getElementsByClassName("bili-video-card__info--ad").length > 0) {
                card.remove();
            }
        }
    }, 1000);
})();