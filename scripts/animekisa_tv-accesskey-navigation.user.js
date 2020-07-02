// ==UserScript==
// @name        [WM] Accesskey Navigation for Animekisa.tv
// @namespace   WidgetMidget
// @description Ctrl + Arrow Key navigation.
// @version     1.0.3
// @updateURL	https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/animekisa_tv-accesskey-navigation.user.js
// @downloadURL https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/animekisa_tv-accesskey-navigation.user.js
// @supportURL  https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match       *://*.animekisa.tv/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */

document.addEventListener('keydown', function(e){
	if (e.ctrlKey)
	{
		switch (e.keyCode)
		{
			case 37:
				$("#playerselector").find("option:selected").prev().prop("selected", true).trigger("change");
      break;

			case 39:
				$("#playerselector").find("option:selected").next().prop("selected", true).trigger("change");
			break;
		}
	}
}, false);
