// ==UserScript==
// @name         [WM] Profanity remover
// @namespace    https://github.com/WidgetMidget/scripts-and-userstyles
// @author       WidgetMidget
// @description  Removes various profanities, though the script probably isn't very stable...
// @version      1.4.21
// @updateURL    https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/profanity-remover.user.js
// @downloadURL  https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/profanity-remover.user.js
// @supportURL   https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @include      http://*
// @include      https://*
// @exclude      https://github.com/*
// ==/UserScript==

// Harvested from u/isochronism at https://www.reddit.com/r/Awesomenauts/comments/32fim8/a_profanity_filter_extension_for_your_browser/
// Thank you 🙂

function recursiveFindTextNodes(ele) {
  var result = [];
  result = findTextNodes(ele,result);
  return result;
}

function findTextNodes(current,result) {
  for(var i = 0; i < current.childNodes.length; i++) {
    var child = current.childNodes[i];
    if(child.nodeType == 3) {
      result.push(child);
    }
    else {
      result = findTextNodes(child,result);
    }
  }
  return result;
}

var l = recursiveFindTextNodes(document.body);

for(var i = 0; i < l.length; i++) {
  var t = l[i].nodeValue;
  t = t.replace(/^fucking$|^mothafucka$|^motherfucker$|^fucker$|^fucked$|^fuckular$|^fucks$|^fuck$|^pissed$|^piss$/gi, "[REDACTED]");
  t = t.replace(/^bullshit$|^shittiness$|^shitty$|^batshit$|^shit$/gi, "[REDACTED]");
  t = t.replace(/^nigger$/gi, "[REDACTED]");
  t = t.replace(/^cock$|^dick$|^cunt$/gi, "[REDACTED]");
  t = t.replace(/^jesusfreak$|^god-awful$/gi, "[REDACTED]");
  l[i].nodeValue = t;
}
