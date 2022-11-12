// ==UserScript==
// @name         [Frg] manuskript 'http' to 'https' redirect
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      1.0.2
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/manuskript_http_to_https.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/manuskript_http_to_https.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        http://*.theologeek.ch/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.theologeek.ch' + initialPage);
