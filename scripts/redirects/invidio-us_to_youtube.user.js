// ==UserScript==
// @name         [Frg] invidio.us to youtube.com redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      1.3.4
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/invidio-us.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/invidio-us_to_youtube.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/invidio-us_to_youtube.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://invidio.us/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://youtube.com' + initialPage);