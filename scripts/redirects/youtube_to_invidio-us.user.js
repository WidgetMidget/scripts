// ==UserScript==
// @name         [Frg] youtube to invidio.us redirect
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.9.6
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/youtube.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/youtube_to_invidio-us.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/youtube_to_invidio-us.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://www.youtube.com/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://invidio.us' + initialPage);