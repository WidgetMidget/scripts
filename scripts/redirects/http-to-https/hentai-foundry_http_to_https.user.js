// ==UserScript==
// @name         [Frg] hentai-foundry 'http' to 'https' redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.2.10
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/hentai-foundry.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/hentai-foundry_http_to_https.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/hentai-foundry_http_to_https.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        http://www.hentai-foundry.com/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://www.hentai-foundry.com' + initialPage);