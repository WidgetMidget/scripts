// ==UserScript==
// @name         [WM] amp/i/etc.reddit.com to reddit.com redirect
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      2.1.2
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/amp-i-etc.reddit.com-to-reddit.com-redirect.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/amp-i-etc.reddit.com-to-reddit.com-redirect.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://amp.reddit.com/*
// @match        https://i.reddit.com/*
// @run-at       document-start
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.reddit.com' + initialPage);