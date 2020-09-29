// ==UserScript==
// @name        [WM] Accesskey Navigation for Kobatochan.com
// @namespace	https://github.com/WidgetMidget/scripts-and-userstyles
// @author      WidgetMidget
// @description Ctrl + Arrow Key navigation.
// @version     2.6.10
// @icon		https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/kobatochan.png
// @updateURL   https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/kobatochan_com-accesskey-navigation.user.js
// @downloadURL https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/kobatochan_com-accesskey-navigation.user.js
// @supportURL  https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match       *://*.kobatochan.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

var prvCh = function(prv){
    var prvId = $('div').find('a').filter(':contains("<< Previous Chapter")');
    if ($(prvId).attr("href") == "null") {} else {window.open($(prvId).attr("href"),"_self")}
};

var nxtCh = function(nxt){
    var nxtId = $('div').find('a').filter(':contains("Next Chapter >>")');
    if ($(nxtId).attr("href") == "null") {} else {window.open($(nxtId).attr("href"),"_self")}
}

var prvPg = function(prv){
    var prvPgId = $('div').find('a').filter(':contains("« Previous Page")');
    if ($(prvPgId).attr("href") == "null") {} else {window.open($(prvPgId).attr("href"),"_self")}
};

var nxtPg = function(nxt){
    var nxtPgId = $('div').find('a').filter(':contains("Next Page »")');
    if ($(nxtPgId).attr("href") == "null") {} else {window.open($(nxtPgId).attr("href"),"_self")}
}

document.addEventListener('keydown', function(e){
	if (e.ctrlKey)
	{
		switch (e.keyCode)
		{
			case 37: prvCh(-1); break;
			case 39: nxtCh(1); break;
		}
	}

	if (e.shiftKey)
	{
		switch (e.keyCode)
		{
			case 37: prvPg(-1); break;
			case 39: nxtPg(1); break;
		}
	}
}, false);
