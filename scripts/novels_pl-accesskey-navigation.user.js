// ==UserScript==
// @name        [WM] Accesskey Navigation for novels.pl
// @namespace   https://github.com/WidgetMidget/scripts-and-userstyles
// @author      WidgetMidget
// @description Ctrl + Arrow Key navigation.
// @version     1.2.10
// @icon        https://raw.githubusercontent.com/WidgetMidget/scripts-and-userstyles/master/resources/favicons/novels-pl.png
// @updateURL   https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/novels_pl-accesskey-navigation.user.js
// @downloadURL https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/novels_pl-accesskey-navigation.user.js
// @supportURL  https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match       *://*.novels.pl/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

var prvCh = function(prv){
    var prvId = $('li' + ".previous").find('a').filter("[href]");
    if ($(prvId).attr("href") == "null") {} else {window.open($(prvId).attr("href"),"_self")}
};

var nxtCh = function(nxt){
    var nxtId = $('li' + ".next").find('a').filter("[href]");
    if ($(nxtId).attr("href") == "null") {} else {window.open($(nxtId).attr("href"),"_self")}
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
}, false);
