// ==UserScript==
// @name         Google Image Search Url Replacer
// @namespace    https://github.com/Widecss
// @version      0.9
// @description  经常切个代理, 右上角图片按扭都要因为地区链接, 而多一次跳转, 显示一个建议收藏的页面, 所以直接改成官方链接算了
// @author       Widecss
// @homepage     https://github.com/Widecss/Widecss-tampermonkey-script
// @supportURL   https://github.com/Widecss/Widecss-tampermonkey-script/issues
// @include      /https?://www.google.*/
// @icon         https://www.google.com/favicon.ico
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js
// @grant        none
// @license      MIT License
// ==/UserScript==


(function() {
    'use strict';

    let GOOGLE_URL = 'https://www.google.com/'

    function change_url(button){
        if(button.innerText === '图片'){
            let picture_search_href = button.href;
            button.href = GOOGLE_URL + picture_search_href.split('/').pop();
        }
    }

    setInterval(()=>{
        let picture_search_buttons = $('a[data-pid="2"]');
        if(picture_search_buttons.length > 0){
            change_url(picture_search_buttons[0])
        }
    }, 200)
})();