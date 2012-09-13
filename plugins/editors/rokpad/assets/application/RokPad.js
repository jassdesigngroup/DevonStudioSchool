/*
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2012 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
((function(){if(typeof this.RokPadData=="undefined"){this.RokPadData={};}var a={theme:{Chrome:"chrome",Clouds:"clouds","Clouds Midnight":"clouds_midnight",Cobalt:"cobalt","Crimson Editor":"crimson_editor",Dawn:"dawn",Dreamweaver:"dreamweaver",Eclipse:"eclipse",Fluidvision:"fluidvision",idleFingers:"idle_fingers",krTheme:"kr_theme",Merbivore:"merbivore","Merbivore Soft":"merbivore_soft","Mono Industrial":"mono_industrial",Monokai:"monokai","Pastel on dark":"pastel_on_dark","Solarized Dark":"solarized_dark","Solarized Light":"solarized_light",TextMate:"textmate",Tomorrow:"tomorrow","Tomorrow Night":"tomorrow_night","Tomorrow Night Blue":"tomorrow_night_blue","Tomorrow Night Bright":"tomorrow_night_bright","Tomorrow Night 80s":"tomorrow_night_eighties",Twilight:"twilight","Vibrant Ink":"vibrant_ink"},"font-size":["7px","8px","9px","10px","11px","12px","13px","14px","15px","16px","20px","24px"]};
this.RokPadClass=new Class({Implements:[Options,Events],initialize:function(){this.elements=document.getElements("[data-rokpad-editor]");this.editors={};
this.attach();this._startAutoSave();return this;},attach:function(){this.elements.each(function(d){var e=d.retrieve("rokpad:attached",false),c=d.retrieve("rokpad:options",false);
if(!e){d.store("rokpad:attached",true);var g=d.get("data-rokpad-editor"),b=d.getElement("[data-rokpad-container]");this.editors[g]=this._getACE(d);if(!c){this._populateOptions(g,d);
d.store("rokpad:options",true);}this._restoreSettings(g);this._restoreOptions(g);this._extrasFixes(g,d);b.makeResizable({handle:d.getElement(".rokpad-statusbar"),modifiers:{x:false,y:"height"},limit:{x:false,y:[b.getStyle("min-height").toInt(),false]},onDrag:function(){this.editors[g].getEditor().resize();
}.bind(this),onComplete:function(){this._store("height",b.getStyle("height").toInt());}.bind(this)});var f={undo:d.retrieve("rokpad:events:undo",function(h,j){this.undo.call(this,h,g,d,j);
}.bind(this)),redo:d.retrieve("rokpad:events:redo",function(h,j){this.redo.call(this,h,g,d,j);}.bind(this)),fullscreen:d.retrieve("rokpad:events:fullscreen",function(h,j){this.fullscreen.call(this,h,g,d,j);
}.bind(this)),shortcode:d.retrieve("rokpad:events:shortcode",function(h,j){this.insertShortCode.call(this,h,g,d,j);}.bind(this)),softtabs:d.retrieve("rokpad:events:softtabs",function(h,j){h.preventDefault();
this.setUseSoftTabs.call(this,g,j,d);}.bind(this)),tabsize:d.retrieve("rokpad:events:tabsize",function(h,j){h.preventDefault();this.setTabSize.call(this,g,j,d);
}.bind(this)),mode:d.retrieve("rokpad:events:mode",function(h,j){h.preventDefault();this.setMode.call(this,g,j,d);}.bind(this)),dropdownToggle:d.retrieve("rokpad:events:dropdownToggle",function(h,k){var m=k.get("data-rokpad-toggle"),j=d.getElement("[data-rokpad-dropdown="+m+"]")||d.getElement("[data-rokpad-popover="+m+"]");
d.getElements("[data-rokpad-dropdown], [data-rokpad-popover]").setStyle("display","none");j.setStyle("display","block");}.bind(this)),toggleActionSettings:d.retrieve("rokpad:events:actionSettings",function(h,j){h.preventDefault();
this.toggleActionSettings.call(this,g,j.get("data-rokpad-action-setting"));}.bind(this)),saveButton:d.retrieve("rokpad:events:saveAction",function(h,j){h.preventDefault();
this.save.call(this);}.bind(this)),findButton:d.retrieve("rokpad:events:find",function(j,k){j.preventDefault();var h=d.getElement("[data-rokpad-action-method=find] input");
this._showActionbar.call(this,g);this._setActionbar.call(this,g,(j.shift?"replace":"find"));h.select();h.focus();}.bind(this)),findReplaceButton:d.retrieve("rokpad:events:findreplace",function(j,k){j.preventDefault();
var h=d.getElement("[data-rokpad-action-method=find] input");this._showActionbar.call(this,g);this._setActionbar.call(this,g,"replace");h.select();h.focus();
this._hideDropDowns();}.bind(this)),beautifyHTML:d.retrieve("rokpad:events:beautifyhtml",function(h,j){h.preventDefault();this.editors[g].setValue(style_html(this.editors[g].getValue(),{indent_size:this.editors[g].getEditor().getSession().getTabSize(),indent_char:" ",max_char:0,unformatted:["a","sub","sup","b","i","u"]}));
this._hideDropDowns();}.bind(this)),gotoButton:d.retrieve("rokpad:events:goto",function(j,k){j.preventDefault();var h=d.getElement("[data-rokpad-action-method=goto] input");
this._showActionbar.call(this,g);this._setActionbar.call(this,g,"goto");h.select();h.focus();this._hideDropDowns.call(this);}.bind(this)),showFindOrReplace:d.retrieve("rokpad:events:showfind",function(k,m){var h;
if(k.key=="esc"){this._hideActionbar.call(this,g);return true;}if(k.key=="enter"){var j=this._getRange.call(this,g,this._retrieve("actionSettings"));if(m.getParent("[data-rokpad-action-method]").get("data-rokpad-action-method")=="goto"){h=d.getElement("[data-rokpad-action-method=goto] input");
this.editors[g].getEditor().gotoLine(h.get("value"),0,true);}else{this.editors[g].getEditor().find(j.needle,j,true);}return true;}if(k.key=="l"&&k[Browser.Platform.mac?"meta":"control"]){h=d.getElement("[data-rokpad-action-method=goto] input");
k.preventDefault();this._showActionbar.call(this,g);this._setActionbar.call(this,g,"goto");h.select();h.focus();return true;}if(k.key=="g"&&k[Browser.Platform.mac?"meta":"control"]){k.preventDefault();
this.editors[g].getEditor()[k.shift?"findPrevious":"findNext"](this._getRange(g,this._retrieve("actionSettings")));this.editors[g].getEditor().focus();
return true;}if(k.key!="f"||!k[Browser.Platform.mac?"meta":"control"]){return true;}h=d.getElement("[data-rokpad-action-method=find] input");k.preventDefault();
this._showActionbar.call(this,g);this._setActionbar.call(this,g,(k.shift?"replace":"find"));h.select();h.focus();}.bind(this)),actionInput:d.retrieve("rokpad:events:actioninput",function(h,j){this.performAction.call(this,g,j,d);
}.bind(this)),document:function(h,j){this._hideDropDowns.call(this,h,j);}.bind(this),inputWrapper:function(h,j){j.getElement("input").focus();},changeOptions:function(h,j){this.changeOptions.call(this,g,j,"store");
}.bind(this),enableAutoSave:function(h,j){if(j.get("checked")){this._startAutoSave();}else{this._stopAutoSave();}}.bind(this),dragover:function(h,j){this.dragOver.call(this,h,g,j);
}.bind(this),drop:function(h,j){this.drop.call(this,h,g,j);}.bind(this)};d.addEvents({"click:relay([data-rokpad-undo])":f.undo,"click:relay([data-rokpad-redo])":f.redo,"click:relay([data-rokpad-fullscreen])":f.fullscreen,"click:relay([data-rokpad-shortcode])":f.shortcode,"click:relay([data-rokpad-toggle])":f.dropdownToggle,"click:relay([data-rokpad-softtabs])":f.softtabs,"click:relay([data-rokpad-tabsize])":f.tabsize,"click:relay([data-rokpad-mode])":f.mode,"click:relay([data-rokpad-action-setting])":f.toggleActionSettings,"click:relay([data-rokpad-save])":f.saveButton,"click:relay([data-rokpad-find])":f.findButton,"click:relay([data-rokpad-find-replace])":f.findReplaceButton,"click:relay([data-rokpad-beautify])":f.beautifyHTML,"click:relay([data-rokpad-goto])":f.gotoButton,"keyup:relay([class*=rok-input-row-] input)":f.actionInput,"click:relay([data-rokpad-action])":f.actionInput,"keydown:relay([class*=rok-input-row-] input)":f.showFindOrReplace,"click:relay(.rok-input-wrapper)":f.inputWrapper,"click:relay(input[data-rokpad-options])":f.changeOptions,"change:relay(select[data-rokpad-options])":f.changeOptions,"keyup:relay(input[type=text][data-rokpad-options])":f.changeOptions,"click:relay(input[data-rokpad-options=autosave-enabled])":f.enableAutoSave});
document.id(document.body).addEvents({dragover:f.dragover,drop:f.drop});if(!document.retrieve("rokpad:events:document",false)){document.store("rokpad:events:document",true);
document.addEvent("click",f.document);}}},this);},attachResize:function(d,c){var b=window.retrieve("rokpad:events:resize",function(){var e=this._calculateHeight(c);
c.getElement(".rokpad-editor-container").setStyle("height",window.getSize().y-e);this.editors[d].getEditor().resize.delay(1,this.editors[d].getEditor());
}.bind(this));window.addEvent("resize",b);},detachResize:function(){window.removeEvent("resize",window.retrieve("rokpad:events:resize"));},dragOver:function(b,d,c){},drop:function(e,g,f){var c;
try{c=e.event.dataTransfer.files[0];if(window.FileReader){var b=new FileReader();b.onload=function(){var h=this._getModeFromPath(c.name);this.editors[g].setValue(b.result);
this.setMode(g,this.editors[g].wrapper.getElement("[data-rokpad-mode="+h+"]"),this.editors[g].wrapper,true);}.bind(this);b.readAsText(c);}return e.preventDefault(e);
}catch(d){return e.preventDefault(e);}},_getModeFromPath:function(b){var d="text",c;Object.each(RokPadData.modesList,function(f,e){c=new RegExp("^.*\\.("+f[1]+")$","g");
if(b.match(c)){d=f[2];}});return d;},undo:function(c,e,b,d){if(d.hasClass("rok-button-disabled")){return true;}this.editors[e].getEditor().undo(true);},redo:function(c,e,b,d){if(d.hasClass("rok-button-disabled")){return true;
}this.editors[e].getEditor().redo(true);},setMode:function(g,e,c,b){c=c||this.editors[g].wrapper;e=typeOf(e)=="element"?e:c.getElement("[data-rokpad-mode="+e+"]");
var d=e.get("data-rokpad-mode"),f=e.getSiblings("[data-rokpad-mode]");if(!d){return true;}f.removeClass("rokpad-checked");e.addClass("rokpad-checked");
c.getElement("[data-rokpad-toggle=mode] span").set("text",e.get("text"));this.editors[g].getEditor().getSession().clearAnnotations();this.editors[g].getEditor().getSession().setMode("ace/mode/"+d);
this._hideDropDowns();if(!b){this._store("mode",d);}return this;},getMode:function(b){return this.editors[b].getEditor().getSession().getMode().$id.replace(/^ace\/mode\//g,"");
},setTabSize:function(f,d,b){b=b||this.editors[f].wrapper;d=typeOf(d)=="element"?d:b.getElement("[data-rokpad-tabsize="+d+"]");var c=d.get("data-rokpad-tabsize"),e=d.getSiblings("[data-rokpad-tabsize]");
if(!c){return true;}e.removeClass("rokpad-checked");d.addClass("rokpad-checked");b.getElement("[data-rokpad-toggle=tabs] span").set("text",c);c=c.toInt()||0;
if(!c){return;}this.editors[f].getEditor().getSession().setTabSize(c);this._hideDropDowns();this._store("tabSize",c);return this;},getTabSize:function(b){return this.editors[b].getEditor().getSession().getTabSize();
},setUseSoftTabs:function(f,e,b){b=b||this.editors[f].wrapper;var c=typeOf(e)=="string"||typeOf(e)=="number"?e:null;e=typeOf(e)=="element"?e:b.getElement("[data-rokpad-softtabs]");
var d=c!==null?c:e.get("data-rokpad-softtabs");d=(!d||d=="0"?1:0);e[!d?"removeClass":"addClass"]("rokpad-checked").set("data-rokpad-softtabs",d);this.editors[f].getEditor().getSession().setUseSoftTabs(!d?1:0);
this._hideDropDowns();this._store("useSoftTabs",!d?1:0);return this;},getUseSoftTabs:function(b){return this.editors[b].getEditor().getSession().getUseSoftTabs();
},toggleActionSettings:function(g,c,e){var d=this.editors[g].wrapper.getElement("[data-rokpad-action-setting="+c+"]"),b=this._getRange(g,this._retrieve("actionSettings"))||{},f=b[c];
if(typeof f=="undefined"){d[c=="wrap"?"removeClass":"addClass"]("rok-button-unchecked");b[c]=(c=="wrap")?true:false;}else{if(typeof e=="undefined"){e=!!d.hasClass("rok-button-unchecked");
}d[e===false?"addClass":"removeClass"]("rok-button-unchecked");b[c]=e;}this._store("actionSettings",b);this.editors[g].getEditor().$search.set(b);},performAction:function(c,j,g){var e=this._getRange(c,this._retrieve("actionSettings")),h=this.editors[c].getEditor(),d=null;
var b=j.getParent("[data-rokpad-action-method]");if(b){b=b.get("data-rokpad-action-method");switch(b){case"goto":break;case"find":e.needle=j.get("value");
this._store("actionSettings",e);break;case"replace":e.replacement=j.get("value");this._store("actionSettings",e);}}var f=j.get("data-rokpad-action");if(f){var k=h.$search.getOptions().needle;
if(k!=e.needle&&(f=="findNext"||f=="findPrevious")){f="find";}switch(f){case"goto":d=this.editors[c].wrapper.getElement("[data-rokpad-action-method="+f+"] input").get("value").toInt();
if(!isNaN(d)){h.gotoLine(d,0,true);}break;case"find":h.find(e.needle,e,true);break;case"findAll":h.findAll(e.needle,e);break;case"findNext":h.findNext(e,true);
break;case"findPrevious":h.findPrevious(e,true);break;case"replace":h.replace(e.replacement,e);break;case"replaceAll":h.replaceAll(e.replacement,e);break;
}h.focus();}},changeOptions:function(b,d,h){var g=d.get("tag")=="select"||d.get("type")=="text"?d.get("value"):d.checked,j=d.get("data-rokpad-options"),k="set"+j.camelCase().capitalize(),c=this.editors[b].getEditor();
switch(j){case"theme":case"font-size":this.editors[b][k](g);break;case"highlight-active-line":case"show-invisibles":case"highlight-selected-word":case"fade-fold-widgets":c[k](g);
break;case"show-gutter":case"show-print-margin":c.renderer[k](g);break;case"fold-style":c.getSession()[k](g);c.setShowFoldWidgets(g!=="manual");break;case"selection-style":c[k](g?"line":"text");
break;case"use-wrap-mode":var f=c.getSession(),e=c.renderer;switch(g){case"off":f[k](false);e.setPrintMarginColumn(80);break;case"40":f[k](true);f.setWrapLimitRange(40,40);
e.setPrintMarginColumn(40);break;case"80":f[k](true);f.setWrapLimitRange(80,80);e.setPrintMarginColumn(80);break;case"free":f[k](true);f.setWrapLimitRange(null,null);
e.setPrintMarginColumn(80);break;}break;}if(h){this._store(j,g);}},fullscreen:function(b,c,e,f){var k;if(e.retrieve("rokpad:states:fullscreen",false)){var n=e.retrieve("rokpad:states:styles"),g=e.retrieve("rokpad:states:containerheight"),j=e.retrieve("rokpad:states:location"),h=e.retrieve("rokpad:states:document"),d=e.retrieve("rokpad:states:documentscroll");
e.setStyles(n).inject(j.element,j.position);e.getElement(".rokpad-editor-container").setStyles(g);if(h.html["overflow-y"]=="scroll"||h.html.overflow=="auto"){document.id(document.html).setStyle("overflow",h.html.overflow);
}document.id(document.body).setStyle("overflow",h.body);window.scrollTo(d.x,d.y);this.editors[c].getEditor().resize.delay(1,this.editors[c].getEditor());
this.detachResize();e.removeClass("rokpad-cantresize");k=e.getElement("[data-rokpad-container]").retrieve("resizer");k.attach();f.getElement("i").className="rokpad-icon-fullscreen";
e.store("rokpad:states:fullscreen",false);}else{e.store("rokpad:states:location",this._getLocation(e));e.store("rokpad:states:styles",e.getStyles("position","left","top","right","bottom","z-index","height"));
e.store("rokpad:states:containerheight",e.getElement(".rokpad-editor-container").getStyles("height","min-height"));e.store("rokpad:states:document",{html:document.id(document.html).getStyles("overflow","overflow-y","overflow-x"),body:document.id(document.body).getStyle("overflow")});
e.store("rokpad:states:documentscroll",window.getScroll());var m=this._calculateHeight(e);e.inject(document.id(document.body)).setStyles({position:"fixed",left:0,top:0,right:0,bottom:0,"z-index":10000,height:"100%"});
e.getElement(".rokpad-editor-container").setStyles({height:window.getSize().y-m,"min-height":"0"});if(document.id(document.html).getStyle("overflow-y")=="scroll"||document.id(document.html).getStyle("overflow")=="auto"){document.id(document.html).setStyle("overflow","hidden");
}document.id(document.body).setStyle("overflow","hidden");this.editors[c].getEditor().resize.delay(5,this.editors[c].getEditor());this.attachResize(c,e);
e.addClass("rokpad-cantresize");k=e.getElement("[data-rokpad-container]").retrieve("resizer");k.detach();f.getElement("i").className="rokpad-icon-windowed";
e.store("rokpad:states:fullscreen",true);}this.editors[c].getEditor().focus();},insertShortCode:function(c,d,h,n){var g=n.get("data-rokpad-shortcode").replace(/'/g,'"'),m=this.editors[d].getEditor(),o=m.getSession(),p,j,e=[],b=[];
if(!g){return;}if(RokPadDevice=="portable"){g=g.substitute({cur:"",data:"",n:"\n",t:"\t"});insertAtCursor(document.id(d),g);document.id(d).focus();return;
}ranges=Array.from(m.getSelection()[m.getSelection().inMultiSelectMode?"getAllRanges":"getRange"]());m.clearSelection();ranges.each(function(q,s){p=o.getTextRange(q);
j=g.substitute({cur:"{cur}",data:p,n:"\n",t:"\t"});b=[];(j.split("\n")).each(function(t,v){var u=t.indexOfAll("{cur}");if(u.length){u.each(function(x,w){b.push({row:q.start.row+v,column:(!v?q.start.column:0)+(x-(5*w))});
});}},this);j=j.substitute({cur:""});o.replace(q,j);var r=m.getSelection();b.each(function(t,u){var v=q.clone();v.setStart(t);v.setEnd(t);v.cursor=t;if(r.inMultiSelectMode||b.length>1){r.addRange(v);
}else{m.moveCursorToPosition(t);}});},this);var f=m.getSelection().getAllRanges(),k=b.length*ranges.length;for(i=b.length,l=f.length;i<l;i+=b.length+1){m.getSelection().substractPoint(f[i].cursor);
}m.focus();},save:function(){if(!this._canSave()){return false;}if(!document.retrieve("rokpad:ajax:save",false)){var d=new Request({url:document.getElement("form[name=adminForm]").get("action"),onRequest:this.saveRequest,onSuccess:this.saveSuccess});
document.store("rokpad:ajax:save",d);}var b=this._getTask(),c=document.getElement("form[name=adminForm]"),e=document.retrieve("rokpad:ajax:save");c.task.value=b;
e.cancel().post(c.toQueryString());},saveRequest:function(){document.getElements("[data-rokpad-save] i").addClass("spinner");},saveSuccess:function(e){var c=new Element("div").set("html",e),b=document.getElement("form[name=adminForm"),h=c.getElements("form[name=adminForm] input, form[name=adminForm] select, form[name=adminForm] textarea"),k,j,d,f;
for(var g=h.length-1;g>=0;g--){j=h[g].get("type");k=document.id(h[g].get("id"))||document.getElement(h[g].get("tag")+"[name="+h[g].get("name")+"]");if(k){k.set("value",h[g].get("value"));
}else{if(h[g].get("name")){b.adopt(h[g].setStyle("display","none"));}}}d=c.getElement("form[name=adminForm]").get("action");b.set("action",d!="index.php"?d:location.href);
f=document.retrieve("rokpad:ajax:save");f.setOptions({url:b.get("action")});document.getElements("[data-rokpad-savedate]").set("text",(new Date()).format("%d %b, %T"));
document.getElements("[data-rokpad-save] i").removeClass("spinner");},_getACE:function(d){var e=d.get("data-rokpad-editor"),c=document.id(e+"-rokpad-editor"),b=d.getElement("[data-rokpad-original]");
d.setStyle("height","auto");return new RokPadACE(e,{wrapper:d,container:c,id:e});},_populateOptions:function(d,b){var c;Object.each(a,function(g,e){c=b.getElement("[data-rokpad-options="+e+"]");
var f=typeOf(g);(f=="object"?Object:Array).each(g,function(j,h){c.adopt(new Element("option[value="+j+"]").set("text",(f=="object"?h:j)));});});},_restoreSettings:function(c){this.setMode(c,(this._retrieve("mode")||"html"));
this.setUseSoftTabs(c,this._retrieve("useSoftTabs"));this.setTabSize(c,this._retrieve("tabSize")||4);this[this._retrieve("showActionbar",false)?"_showActionbar":"_hideActionbar"](c);
this._setActionbar(c,this._retrieve("actionbarMode","find"),false);var b=this._getRange(c,this._retrieve("actionSettings"));if(!b){this._store("actionSettings",{});
b={};}["regExp","caseSensitive","wholeWord","backwards","wrap","scope"].each(function(d){var e=(d=="wrap")?true:false;this.toggleActionSettings(c,d,b[d]?b[d]:e);
},this);},_restoreOptions:function(f){var d=RokPadDefaultSettings,e=this.editors[f].wrapper,b,c;Object.each(d,function(h,g){b=e.getElement("[data-rokpad-options="+g+"]");
h=(h=="0"||h=="1"||b.get("type")=="text")?h.toInt():h;if(b){c=this._retrieve(g);b.set((b.get("type")=="checkbox"?"checked":"value"),typeof c!="undefined"?c:h);
this.changeOptions(f,b);}},this);},_extrasFixes:function(h,c){var b=c.getParent(".repeatable-list .repeatable-element.hidden"),g=c.getElement("! > .repeatable-list ~ p.add a"),f=c.getElements("! > .repeatable-list .repeatable-element > .delete");
if(b&&g){if(!g.retrieve("rokpad:zoo:add",false)){g.store("rokpad:zoo:add",true);g.addEvent("click",function(){var m=c.getParent(".repeatable-list").getElements(".repeatable-element:not(.hidden)").getLast(),k=m.getElement("[data-rokpad-editor]"),j=k.get("data-rokpad-editor");
if(!this.editors[j].textarea.get("name")){this.editors[j].textarea.set("name",this.editors[j].textarea.get("id"));}this.editors[j].getEditor().resize();
this.editors[j].getEditor().focus.delay(10,this.editors[j].getEditor());}.bind(this));}}if(b&&f.length){f.addEvent("click",function(){var m=c.getParent(".repeatable-list").getElements(".repeatable-element:not(.hidden)").getLast(),k=m.getElement("[data-rokpad-editor]"),j=k.get("data-rokpad-editor");
this.editors[j].textarea.set("name",null);}.bind(this));}var e=document.getElement(".jevconfig"),d=(e)?e.getElements("#configs.tabs > dt"):[];if(e&&d.length){d.addEvent("click",function(){this.editors[h].getEditor().resize.delay(5,this.editors[h].getEditor());
}.bind(this));}},_rearrangeHeight:function(g,e){var f=this.editors[g].wrapper,c=f.getElement("[data-rokpad-container]"),d=f.getElement("[data-rokpad-actionbar]"),b=d.getSize().y-Math.abs(e||0);
c.setStyle("height",Math.max(250,c.getSize().y-2-b));this.editors[g].getEditor().resize();},_showActionbar:function(h,e){var g=this.editors[h].wrapper,b=g.getElement("[data-rokpad-container]"),d=g.getElement("[data-rokpad-actionbar]"),c=g.getElement("[data-rokpad-action-method=find] input"),f=g.getElement("[data-rokpad-action-method=replace] input");
inputGoto=g.getElement("[data-rokpad-action-method=goto] input");if(!d.retrieve("rokpad:actionbar:shown",false)||e){d.setStyle("display","block");b.setStyle("height",this._retrieve("height")||b.getStyle("min-height").toInt());
this._store("showActionbar",true);c.set("value",this._retrieve("actionSettings").needle);f.set("value",this._retrieve("actionSettings").replacement);inputGoto.set("value","");
this._rearrangeHeight(h);d.store("rokpad:actionbar:shown",true);}},_hideActionbar:function(f){var e=this.editors[f].wrapper,c=e.getElement("[data-rokpad-container]"),d=e.getElement("[data-rokpad-actionbar]"),b=0;
if(d.retrieve("rokpad:actionbar:shown",true)){b=d.getSize().y;c.setStyle("height",c.getSize().y+b-2);this.editors[f].getEditor().resize();d.setStyle("display","none");
this._store("showActionbar",false);d.store("rokpad:actionbar:shown",false);}},_setActionbar:function(f,d,c){var e=this.editors[f].wrapper,b=e.getElement("[data-rokpad-actionbar]");
row2=b.getElement(".rok-input-row-2"),height1=height2=0;switch(d){case"goto":height1=b.getSize().y;row2.setStyle("display","none");height2=b.getSize().y;
e.getElement(".rokpad-column-1").setStyle("display","none");e.getElement("[data-rokpad-action-method=goto]").setStyle("display","block");e.getElement("[data-rokpad-action=goto]").setStyle("display","inline-block");
e.getElement("[data-rokpad-action-method=find]").setStyle("display","none");e.getElement(".rokpad-column-3 .rok-input-row-2").setStyle("display","none");
e.getElement("[data-rokpad-action=find]").setStyle("width","auto");e.getElements("[data-rokpad-action=findNext]").getParent(".rok-buttons-group").setStyle("display","none");
e.getElements("[data-rokpad-action=find], [data-rokpad-action=findNext], [data-rokpad-action=findPrevious], [data-rokpad-action=findAll]").setStyle("display","none");
this._store("actionbarMode","goto");break;case"find":height1=b.getSize().y;row2.setStyle("display","none");height2=b.getSize().y;e.getElement(".rokpad-column-1").setStyle("display","table-cell");
e.getElements("[data-rokpad-action-method=goto], [data-rokpad-action=goto]").setStyle("display","none");e.getElement("[data-rokpad-action-method=find]").setStyle("display","block");
e.getElement(".rokpad-column-3 .rok-input-row-2").setStyle("display","none");e.getElement("[data-rokpad-action=find]").setStyle("width","auto");e.getElements("[data-rokpad-action=findNext]").getParent(".rok-buttons-group").setStyle("display","inline-block");
e.getElements("[data-rokpad-action=find], [data-rokpad-action=findNext], [data-rokpad-action=findPrevious], [data-rokpad-action=findAll]").setStyle("display","inline-block");
this._store("actionbarMode","find");break;case"replace":height1=b.getSize().y;row2.setStyle("display","block");height2=b.getSize().y;e.getElement(".rokpad-column-1").setStyle("display","table-cell");
e.getElements("[data-rokpad-action-method=goto], [data-rokpad-action=goto]").setStyle("display","none");e.getElement("[data-rokpad-action-method=find]").setStyle("display","block");
e.getElement(".rokpad-column-3 .rok-input-row-2").setStyle("display","block");e.getElement("[data-rokpad-action=find], [data-rokpad-action=findAll]").setStyle("display","inline-block");
e.getElements("[data-rokpad-action=findNext], [data-rokpad-action=findPrevious]").setStyle("display","none");e.getElement("[data-rokpad-action=find]").setStyle("width",e.getElement("[data-rokpad-action=replace]").getComputedSize().width||47);
this._store("actionbarMode","replace");}if(c!==false){this._rearrangeHeight(f,height1);}if(e.retrieve("rokpad:states:fullscreen")){window.fireEvent("resize",null,1);
}},_store:function(b,c){if(!$.jStorage.get("rokpad")){$.jStorage.set("rokpad",{});}$.jStorage.setTTL("rokpad",0);var d=$.jStorage.get("rokpad");d[b]=c;
return $.jStorage.set("rokpad",d);},_retrieve:function(b){if(!$.jStorage.get("rokpad")){$.jStorage.set("rokpad",{});}$.jStorage.setTTL("rokpad",0);return $.jStorage.get("rokpad")[b];
},_getRange:function(e,c){if(!c){return c;}var d=this.editors[e].getEditor().getSelectionRange(),b=this.editors[e].getEditor().getSelection();if(b.isEmpty()){c.range=null;
}if(c.scope&&!b.isEmpty()){if(d.start.row==d.end.row&&Math.abs(d.start.column-d.end.column)==c.needle.length){return c;}c.range=d;}return c;},_getLocation:function(c){var b={};
if(!c.getSiblings().length){b={element:c.getParent(),position:"inside"};}else{if(c.getPrevious()){b={element:c.getPrevious(),position:"after"};}else{if(c.getNext()){b={element:c.getNext(),position:"before"};
}}}return b;},_calculateHeight:function(c){var b=0;c.getElements("> :not(.rokpad-editor-container)").each(function(d){if(d.getStyle("display")!="none"){b+=d.getSize().y;
}});return b;},_hideDropDowns:function(b,c){c=c||(b&&b.target)||null;if(!c||typeOf(c)=="document"){return document.getElements("[data-rokpad-dropdown], [data-rokpad-popover]").setStyle("display","none");
}else{if(c&&(c.get("data-rokpad-dropdown")||c.getParent("[data-rokpad-dropdown]")||c.get("data-rokpad-popover")||c.getParent("[data-rokpad-popover]")||c.get("data-rokpad-toggle")||c.getParent("[data-rokpad-toggle]"))){return true;
}document.getElements("[data-rokpad-dropdown], [data-rokpad-popover]").setStyle("display","none");}},_canSave:function(){if(!document.retrieve("rokpad:document:submitform",false)){document.store("rokpad:document:submitform",Joomla.submitform);
}var h=true,b=document.retrieve("rokpad:document:submitform"),d=this._getTask();submitform=Joomla.submitform=function(j){return false;};var g=document.getElements("form input.required, form select.required, .message-name !~ input, .message-name !~ select, #k2AdminContainer #title, #k2AdminContainer #catid, #k2AdminContainer #name");
if(document.getElement("[data-zooversion]")&&g.length){var f=new Elements(g.getSiblings(".message-name").flatten()),e=document.getElement('input[name="name"]');
if(e&&e.get("value")===""){h=false;}if(!h){e.focus();f.setStyle("display","block");}}if(typeof $K2!=="undefined"&&g.length){var c=g.get("value");if(c.contains("0")||c.contains("")){h=false;
}}if(document.formvalidator){h=document.formvalidator.isValid(document.getElement("[name=adminForm]"));}Joomla.submitbutton(d);Joomla.submitform=b;submitform=b;
return h;},_getTask:function(){var c=document.getElement("#toolbar-apply a")||document.getElement("form[name=adminForm] .formelm-buttons > button"),b=(c&&c.get("onclick")||"").toString().replace(/.*submitbutton\(['|"](.*)['|"]\).*/g,"$1");
return b||"apply";},_startAutoSave:function(){var b=this._retrieve("autosave-enabled"),c=this._retrieve("autosave-time")||5;c=(isNaN(c)?5:c.toInt())*60*1000;
this._stopAutoSave();if(b){this.autosaveTimer=function(){if(this._retrieve("autosave-enabled")){this.save();this._startAutoSave();}}.delay(c,this);}},_stopAutoSave:function(){clearTimeout(this.autosaveTimer);
}});})());