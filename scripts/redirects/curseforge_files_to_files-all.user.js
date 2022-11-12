// ==UserScript==
// @name         [Frg] Curseforge "files" to "files/all" redirect
// @namespace	 https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @version      2.2.6
// @icon         https://raw.githubusercontent.com/Frigvid/scripts-and-userstyles/master/resources/favicons/curseforge.png
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/curseforge_files_to_files-all.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/redirects/curseforge_files_to_files-all.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
// @match        https://www.curseforge.com/minecraft/mc-mods/*/files
// @match        https://www.curseforge.com/minecraft/modpacks/*/files
// ==/UserScript==

var initialPage = location.pathname + location.search;
location.replace(initialPage + '/all');