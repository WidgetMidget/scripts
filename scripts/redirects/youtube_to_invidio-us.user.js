// ==UserScript==
// @name         [WM] youtube to invidio.us redirect
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      2.9.5
// @icon         https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/youtube.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/youtube_to_invidio-us.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/youtube_to_invidio-us.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://www.youtube.com/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://invidio.us' + initialPage);