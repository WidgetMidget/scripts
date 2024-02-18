// ==UserScript==
// @name        [Frg] Questionable Questing asterisks to linebreaks
// @namespace   https://github.com/frigvid/scripts-and-userstyles
// @author      frigvid
// @description
// @version     1.0.1
// @icon        https://www.google.com/s2/favicons?domain=questionablequesting.com
// @updateURL   https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-asterisks-to-hr.user.js
// @downloadURL https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-asterisks-to-hr.user.js
// @supportURL  https://github.com/frigvid/scripts-and-userstyles/issues
// @match       https://forum.questionablequesting.com/threads/*/reader
// ==/UserScript==

(function() {
    'use strict';

    // Regular expression to match strings of stars with a minimum length of 5 or longer
    var starPattern = /\*{10,}/g;

    // Find all instances of the star pattern and replace them with an <hr> element
    document.body.innerHTML = document.body.innerHTML.replace(starPattern, '<hr>');
})();
