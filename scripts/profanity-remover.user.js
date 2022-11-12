// ==UserScript==
// @name         [Frg] Profanity remover
// @namespace    https://github.com/Frigvid/scripts-and-userstyles
// @author       Frigvid
// @description  Removes various profanities, though the script probably isn't very stable...
// @version      1.4.27
// @updateURL    https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/profanity-remover.user.js
// @downloadURL  https://github.com/Frigvid/scripts-and-userstyles/raw/master/scripts/profanity-remover.user.js
// @supportURL   https://github.com/Frigvid/scripts-and-userstyles/issues
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
  t = t.replace(/\fucking\b|\mothafucka\b|\motherfucker\b|\fucker\b|\fucked\b|\fuckular\b|\fucks\b|\fuck\b|\pissed\b|\piss\b/gi, "[REDACTED]");
  t = t.replace(/\bullshit\b|\shittiness\b|\shitty\b|\batshit\b|\shit\b/gi, "[REDACTED]");
  t = t.replace(/\nigger\b/gi, "[REDACTED]");
  t = t.replace(/\damn\b|\damned\b|\damnit\b|\dammit\b/gi, "[REDACTED]");
  t = t.replace(/\cock\b|\dick\b|\cunt\b/gi, "[REDACTED]");
  t = t.replace(/\jesusfreak\b|\god-awful\b/gi, "[REDACTED]");
  t = t.replace(/shut the f up/gi, "[REDACTED]");
  l[i].nodeValue = t;
}