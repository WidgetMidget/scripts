// ==UserScript==
// @name         [WM] Accesskey Navigation for Webtoons
// @icon         https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/webtoons.png
// @author       WidgetMidget
// @description  Ctrl + Arrow Key navigation.
// @version      0.0.3
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/webtoons_com-accesskey-navigation.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/webtoons_com-accesskey-navigation.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        *://*.webtoons.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

var prvCh = function(prv){
  var prvId = $('li' + ".previous").find('a').filter("[href]");
  if ($(prvId).attr("href") == "null") {} else {window.open($(prvId).attr("href"),"_self")}
};

var nxtCh = function(nxt){
  var nxtId = $('li' + ".next").find('a').filter("[href]");
  if ($(nxtId).attr("href") == "null") {} else {window.open($(nxtId).attr("href"),"_self")}
};

document.addEventListener('keydown', function(e){
  if (e.ctrlKey)
  {
    switch (e.keyCode)
    {
      case 37: prvCh(-1); break;
      case 39: nxtCh(1); break;
    }
  }
}, false);