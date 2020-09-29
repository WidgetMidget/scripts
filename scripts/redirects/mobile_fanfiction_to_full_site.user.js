// ==UserScript==
// @name         [WM] Fanfiction.net mobile to full site redirect
// @namespace	 https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      2.3.7
// @icon         https://github.com/WidgetMidget/scripts-and-userstyles/resources/favicons/fanfiction-net.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/mobile_fanfiction_to_full_site.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/mobile_fanfiction_to_full_site.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://m.fanfiction.net/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.fanfiction.net' + initialPage);