// ==UserScript==
// @name         [Frg] twitter to nitter redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.2.4
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/twitter.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/twitter_to_nitter.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/twitter_to_nitter.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://nitter.it' + initialPage);