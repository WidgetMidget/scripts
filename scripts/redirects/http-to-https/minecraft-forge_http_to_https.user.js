// ==UserScript==
// @name         [Frg] minecraft forge 'http' to 'https' redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      1.1.2
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/minecraftforge.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/minecraft-forge_http_to_https.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/http-to-https/minecraft-forge_http_to_https.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        http://files.minecraftforge.net/*
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace('https://files.minecraftforge.net' + initialPage);