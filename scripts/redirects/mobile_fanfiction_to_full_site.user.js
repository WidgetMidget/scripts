// ==UserScript==
// @name         [Frg] Fanfiction.net mobile to full site redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.3.9
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/fanfiction-net.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/mobile_fanfiction_to_full_site.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/mobile_fanfiction_to_full_site.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://m.fanfiction.net/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.fanfiction.net' + initialPage);