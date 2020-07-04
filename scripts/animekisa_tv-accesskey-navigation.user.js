// ==UserScript==
// @name        [WM] Accesskey Navigation for Animekisa.tv
// @namespace   https://github.com/WidgetMidget/scripts-and-userstyles
// @author      WidgetMidget
// @description Ctrl + Arrow Key navigation.
// @version     1.1.28
// @icon        https://www.google.com/s2/favicons?domain=animekisa.tv
// @updateURL   https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/animekisa_tv-accesskey-navigation.user.js
// @downloadURL https://github.com/WidgetMidget/scripts-and-userstyles/raw/master/scripts/animekisa_tv-accesskey-navigation.user.js
// @supportURL  https://github.com/WidgetMidget/scripts-and-userstyles/issues
// @match       *://*.animekisa.tv/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

/* globals $ */
/*
document.addEventListener('keydown', function(e){
  if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey)
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
}, true);
*/
/*
function N(e) {
  E && E.showing && (e.relatedTarget && !u.contains(e.relatedTarget) || !e.relatedTarget && y.Features.iframe) && E.userActive()
}
*/

//$( "jw-tab-focus" ).off();

//$('#textarea').blur()

var foo = "foo"

$(function(){
      // since foo is global, i can alert it here
      alert(foo);
      // this is a local variable
  document.addEventListener('keydown', function(e){
  if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey)
  {
    switch (e.keyCode)
    {
      case 37:
        alert('37');
        //if (!window.my-video1) return false;
        //$( "jw-tab-focus" ).off();
        //$(":contains('jw-tab-focus')").blur() { alert('blur') };
        $("#playerselector").find("option:selected").prev().prop("selected", true).trigger("change");
      break;
      case 39:
        alert('39');
        $("#playerselector").find("option:selected").next().prop("selected", true).trigger("change");
      break;
    }
  }
}, true);
});

/*
function(n) {
  if (n.ctrlKey || n.metaKey) return !0;
  var o = !i.settingsMenu.visible,
      a = i.instreamState;
  switch (n.keyCode) {
    case 27:
      if (t.get("fullscreen")) e.setFullscreen(!1), i.playerContainer.blur(), i.userInactive();
      else {
        var r = e.getPlugin("related");
        r && r.close({
          type: "escape"
        })
      }
      i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(), i.infoOverlay.visible && i.infoOverlay.close(), i.shortcutsTooltip && i.shortcutsTooltip.close();
      break;
    case 13:
    case 32:
      e.playToggle(_t());
      break;
    case 37:
      !a && o && m(-5);
    break;
    case 39:
      !a && o && m(5);
    break;
    case 38:
      o && y(10);
    break;
    case 40:
      o && y(-10);
    break;
    case 67:
      var s = e.getCaptionsList().length;
      if (s) {
        var l = (e.getCurrentCaptions() + 1) % s;
        e.setCurrentCaptions(l)
      }
    break;
    case 77:
      e.setMute();
      break;
    case 70:
      e.setFullscreen();
    break;
    case 191:
      i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
    break;
    default:
      if (n.keyCode >= 48 && n.keyCode <= 59) {
        var c = (n.keyCode - 48) / 10 * t.get("duration");
        e.seek(c, _t())
      }
  }
  return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(), !1) : void 0
}
*/

//$('#unbind').off('jwplayer.core.controls.html5.js')

//case 190 = .
//case 188 = ,
//these two work because they're not caputred by the player, but I prefer ctrl plus arrow keys
/*
document.addEventListener('keydown', function(e){
	if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey)
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
*/
