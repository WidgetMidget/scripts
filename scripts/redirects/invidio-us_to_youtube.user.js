// ==UserScript==
// @name         [WM] invidio.us to youtube.com redirect
// @namespace	 https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      1.3.3
// @icon         https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/invidio-us.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/invidio-us_to_youtube.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/invidio-us_to_youtube.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://invidio.us/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://youtube.com' + initialPage);