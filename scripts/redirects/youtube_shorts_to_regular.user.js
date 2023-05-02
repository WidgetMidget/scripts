// ==UserScript==
// @name         [Frg] youtube shorts to regular redirect
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.9.6
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/youtube.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/youtube_shorts_to_regular.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/youtube_shorts_to_regular.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://www.youtube.com/shorts/*
// ==/UserScript==

location.replace('https://www.youtube.com/watch?v=' + (location.pathname.substring(8) + location.search));