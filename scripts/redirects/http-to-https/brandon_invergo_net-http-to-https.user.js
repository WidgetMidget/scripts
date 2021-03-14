// ==UserScript==
// @name         [WM] brandon.invergo.net 'http' to 'https' redirect
// @namespace	 https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      1.0.0
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/brandon-invergo_http_to_https.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/brandon-invergo_http_to_https.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        http://www.brandon.invergo.net/*
// @match        http://brandon.invergo.net/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.brandon.invergo.net' + initialPage);
