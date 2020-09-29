// ==UserScript==
// @name         [WM] Curseforge "files" to "files/all" redirect
// @namespace	 https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @version      2.2.4
// @icon         https://github.com/WidgetMidget/scripts-and-userstyles/resources/favicons/curseforge.png
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/curseforge_files_to_files-all.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/redirects/curseforge_files_to_files-all.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match        https://www.curseforge.com/minecraft/mc-mods/*/files
// @match        https://www.curseforge.com/minecraft/modpacks/*/files
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace(initialPage + '/all');