// ==UserScript==
// @name         [WM] twitter to nitter.net redirect
// @namespace	 https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      2.1.3
// @icon         https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/twitter.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/twitter_to_nitter.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/twitter_to_nitter.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://nitter.net' + initialPage);