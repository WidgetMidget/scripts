// ==UserScript==
// @name         [WM] Webtoons tos remover
// @icon         https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/webtoons.png
// @author       WidgetMidget
// @description  Removes the terms of service section from the DOM
// @version      1.2.14
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/webtoons_tos-remover.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/webtoons_tos-remover.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        *://*.webtoons.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

(function() {
    var tryCount = 0;
    var loop;
    loop = setInterval(function(){
      try {
        tryCount++;
        $('.ly_dim.on').remove();
        $('.ly_wrap').remove();
        clearInterval(loop);
        console.log('Terms of Service removed');
      } catch (e) {
        console.error(e);
        if (tryCount > 30) {
          clearInterval(loop);
          console.log('Terms of Service not removed');
        }
      }
    }, 1000);
  })();