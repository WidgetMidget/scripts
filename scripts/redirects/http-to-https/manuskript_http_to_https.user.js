// ==UserScript==
// @name         [WM] manuskript 'http' to 'https' redirect
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      1.0.1
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/manuskript_http_to_https.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/manuskript_http_to_https.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        http://*.theologeek.ch/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.theologeek.ch' + initialPage);
