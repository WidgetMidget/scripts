// ==UserScript==
// @name         [Frg] Accesskey Navigation for Webtoons
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @description  Ctrl + Arrow Key navigation.
// @version      1.0.40
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/webtoons.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/webtoons_com-accesskey-navigation.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/webtoons_com-accesskey-navigation.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        *://*.webtoons.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

var prvCh = function(prv){
  var prvId = $("._prevEpisode").filter("[href]");
  if ($(prvId).attr("href") == "null") {} else {window.open($(prvId).attr("href"),"_self")}
};

var nxtCh = function(nxt){
  var nxtId = $("._nextEpisode").filter("[href]");
  if ($(nxtId).attr("href") == "null") {} else {window.open($(nxtId).attr("href"),"_self")}
};

document.addEventListener('keydown', function(e){
  if (e.ctrlKey)
  {
    switch (e.keyCode)
    {
      case 37: prvCh(-1); break;
      case 39: nxtCh(1); break;
    }
  }
}, false);