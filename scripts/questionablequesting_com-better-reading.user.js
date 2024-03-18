// ==UserScript==
// @name        [Frg] Questionable Questing better reading
// @namespace   https://github.com/frigvid/scripts-and-userstyles
// @author      frigvid
// @description
// @version     1.6.3
// @icon        https://www.google.com/s2/favicons?domain=questionablequesting.com
// @updateURL   https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-better-reading.user.js
// @downloadURL https://github.com/frigvid/scripts-and-userstyles/raw/master/scripts/questionablequesting_com-better-reading.user.js
// @supportURL  https://github.com/frigvid/scripts-and-userstyles/issues
// @match       https://forum.questionablequesting.com/threads/*/reader
// @grant       GM_unregisterMenuCommand
// @grant       GM_registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

// @updated 2024-03-18 Added settings. See settings at the bottom of the script.
// 					   Also, note that disabling/enabling replacements are currently "static" in the
// 					   sense that they'll need a page-reload to function. I'll fix that eventually.

// Replace asterisks with linebreaks where relevant.
(function()
{
	'use strict';

	if (GM_getValue("ReplaceAsterisksWithLinebreaks"))
	{
		// Regular expression to match strings of stars with a minimum length of 5 or longer
		var starPattern = /\*{10,}/g;

		// Find all instances of the star pattern and replace them with an <hr> element
		document.body.innerHTML = document.body.innerHTML.replace(starPattern, '<hr>');
	}
	else
	{
		console.log("Asterisks-to-Linebreaks Replacement is disabled. Set to true and reload, if you'd like.")
	}
})();

// Replace extraneous lineshifts where relevant.
(function()
{
    'use strict';

	if (GM_getValue("ExcessiveBreakReduction"))
	{
		const detectAndReplaceBreaks = (container) => {
			const regexBr = /(<br>\s*<br\/>\s*){3,}/g;
			const regexSingleBr = /(<br>\s*){3,}/g;

			container.innerHTML = container.innerHTML.replace(regexBr, '<br><br/><br><br/>').replace(regexSingleBr, '<br><br>');
		};

		const postElements = document.querySelectorAll('[id^="post-"] article, [id^="post-"] article *');

		postElements.forEach(el => {
			if (el.childNodes.length && el.nodeType === 1) { // Ensure the element is an Element node and has child nodes
				detectAndReplaceBreaks(el);
			}
		});
	}
	else
	{
		console.log("Excessive Breaks Reduction is disabled. Set to true and reload, if you'd like.")
	}
})();

// Click on spoiler tags, if there are any.
(function()
{
    'use strict';

	if (GM_getValue("ExcessiveBreakReduction"))
	{
		function revealSpoilers()
		{
			document.querySelectorAll('.bbCodeSpoilerButton').forEach(function(button)
			{
				button.click();
				button.style.display = 'none';
				// Find the associated image containers within the spoiler for each button
				button.closest('.bbCodeSpoilerContainer').querySelectorAll('.SpoilerTarget').forEach(container =>
				{
					// Set the display of the container to 'unset'
					container.style.display = 'unset';
					container.style.background = 'unset';
					container.style.border = 'unset';
					// Ensure images within this container have their 'src' set for loading
					container.querySelectorAll('img.lazyload').forEach(img =>
					{
						if (img.dataset.src)
						{
							img.src = img.dataset.src;
						}
					});
				});
			});
		}

		window.addEventListener('load', revealSpoilers);
	}
	else
	{
		console.log("Show Spoilers is disabled. Set to true and reload, if you'd like for spoilers to automatically expand.")
	}
})();

// SETTINGS.
(function()
{
	'use strict';

	// Define menu commands, with its text and whether it will dynamically update (in-place replacement).
	const features =
	[
		{
			key: "ReplaceAsterisksWithLinebreaks",
			text: (value) => value ? "Disable Asterisks-to-Linebreaks Replacement" : "Enable Asterisks-to-Linebreaks Replacement",
			dynamic: true
		},
		{
			key: "ExcessiveBreakReduction",
			text: (value) => value ? "Disable Excessive Breaks Reduction" : "Enable Excessive Breaks Reduction",
			dynamic: true
		},
		{
			key: "ShowSpoilers",
			text: (value) => `Show Spoilers. State: ${value}`,
			dynamic: true
		}
	];

	// Function to dynamically update the text of a menu command in-place.
	const updateMenuCommand = (feature, commandId) =>
	{
		const currentValue = GM_getValue(feature.key, false);
		const commandText = feature.text(currentValue);

		// Check if the feature command should dynamically update its text.
		if (feature.dynamic)
		{
			// Clear the existing command to prevent duplicates.
			// Technically should be using GM_unregisterMenuCommand, but this works fine somehow.
			GM_registerMenuCommand(commandText, () => {}, {id: commandId});
			// Immediately re-register the command with the updated text and functionality.
			GM_registerMenuCommand(commandText, () =>
			{
				GM_setValue(feature.key, !currentValue);
				// Recursive call to update the command text after the value changes.
				updateMenuCommand(feature, commandId);
			}, {id: commandId});
		}
		else
		{
			// For non-dynamic commands, no in-place text update logic is required.
			// However, the user will need to reload the webpage to see changes.
			// This means "static" commands will need to do something that doesn't
			// require a reload.
		}
	};

	// Register each feature as a menu command and set up its toggle functionality.
	features.forEach(feature =>
	{
		const initialValue = GM_getValue(feature.key, false);
		const commandText = feature.text(initialValue);
		// Generate a pseudo-random ID for the command.
		const commandId = Math.random().toString(36).substr(2, 9);

		// Register the menu command with initial text and functionality.
		GM_registerMenuCommand(commandText, () =>
		{
			GM_setValue(feature.key, !initialValue);
			// Setup for dynamic update if applicable.
			updateMenuCommand(feature, commandId);
		}, {id: commandId});

		// Ensure dynamic commands are correctly initialized with their current state.
		if (feature.dynamic)
		{
			updateMenuCommand(feature, commandId);
		}
	});
})();
