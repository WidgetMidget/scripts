// ==UserScript==
// @name         [WM] sefuart.net 'http' to 'https' redirect
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      1.1.0
// @icon         https://github.com/WidgetMidget/scripts-and-userstyles/resources/favicons/sefuart-net.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/sefuart-net_http_to_https.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/sefuart-net_http_to_https.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        http://*.sefuart.net/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.sefuart.net' + initialPage);