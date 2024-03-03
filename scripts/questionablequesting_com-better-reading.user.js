// ==UserScript==
// @name        [Frg] Questionable Questing better reading
// @namespace   https://github.com/frigvid/scripts-and-userstyles
// @author      frigvid
// @description
// @version     1.5.2
// @icon        https://www.google.com/s2/favicons?domain=questionablequesting.com
// @updateURL   https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-better-reading.user.js
// @downloadURL https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-better-reading.user.js
// @supportURL  https://github.com/frigvid/scripts-and-userstyles/issues
// @match       https://forum.questionablequesting.com/threads/*/reader
// ==/UserScript==

// Replace asterisks with linebreaks where relevant.
(function() {
    'use strict';

    // Regular expression to match strings of stars with a minimum length of 5 or longer
    var starPattern = /\*{10,}/g;

    // Find all instances of the star pattern and replace them with an <hr> element
    document.body.innerHTML = document.body.innerHTML.replace(starPattern, '<hr>');
})();

// Click on spoiler tags, if there are any.
(function() {
    'use strict';

    function revealSpoilers() {
        document.querySelectorAll('.bbCodeSpoilerButton').forEach(function(button) {
            button.click();
            // Find the associated image containers within the spoiler for each button
            button.closest('.bbCodeSpoilerContainer').querySelectorAll('.SpoilerTarget').forEach(container => {
                // Set the display of the container to 'unset'
                container.style.display = 'unset';
                container.style.background = 'unset';
                container.style.border = 'unset';
                // Ensure images within this container have their 'src' set for loading
                container.querySelectorAll('img.lazyload').forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            });
        });
    }

    window.addEventListener('load', revealSpoilers);
})();