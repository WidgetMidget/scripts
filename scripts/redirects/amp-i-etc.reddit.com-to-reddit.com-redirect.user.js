// ==UserScript==
// @name         [Frg] amp/i/etc.reddit.com to reddit.com redirect
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.1.3
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/amp-i-etc.reddit.com-to-reddit.com-redirect.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/amp-i-etc.reddit.com-to-reddit.com-redirect.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://amp.reddit.com/*
// @match        https://i.reddit.com/*
// @run-at       document-start
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.reddit.com' + initialPage);