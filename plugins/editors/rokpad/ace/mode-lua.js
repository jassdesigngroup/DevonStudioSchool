/*
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 */
define("ace/mode/lua",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/lua_highlight_rules","ace/range"],function(d,f,b){var g=d("../lib/oop");
var e=d("./text").Mode;var h=d("../tokenizer").Tokenizer;var a=d("./lua_highlight_rules").LuaHighlightRules;var c=d("../range").Range;var i=function(){this.$tokenizer=new h(new a().getRules());
};g.inherits(i,e);(function(){var l={"function":1,then:1,"do":1,"else":1,elseif:1,repeat:1,end:-1,until:-1,};var k=["else","elseif","end","until"];function j(o){var p=0;
for(var n in o){var m=o[n];if(m.type=="keyword"){if(m.value in l){p+=l[m.value];}}else{if(m.type=="paren.lparen"){p++;}else{if(m.type=="paren.rparen"){p--;
}}}}if(p<0){return -1;}else{if(p>0){return 1;}else{return 0;}}}this.getNextLineIndent=function(q,n,o){var m=this.$getIndent(n);var s=0;var p=this.$tokenizer.getLineTokens(n,q);
var r=p.tokens;if(q=="start"){s=j(r);}if(s>0){return m+o;}else{if(s<0&&m.substr(m.length-o.length)==o){if(!this.checkOutdent(q,n,"\n")){return m.substr(0,m.length-o.length);
}}}return m;};this.checkOutdent=function(o,m,n){if(n!="\n"&&n!="\r"&&n!="\r\n"){return false;}if(m.match(/^\s*[\)\}\]]$/)){return true;}var p=this.$tokenizer.getLineTokens(m.trim(),o).tokens;
if(!p||!p.length){return false;}return(p[0].type=="keyword"&&k.indexOf(p[0].value)!=-1);};this.autoOutdent=function(n,q,u){var r=q.getLine(u-1);var p=this.$getIndent(r).length;
var m=this.$tokenizer.getLineTokens(r,"start").tokens;var o=q.getTabString().length;var t=p+o*j(m);var s=this.$getIndent(q.getLine(u)).length;if(s<t){return;
}q.outdentRows(new c(u,0,u+2,0));};}).call(i.prototype);f.Mode=i;});define("ace/mode/lua_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(c,b,e){var f=c("../lib/oop");
var g=c("../lib/lang");var a=c("./text_highlight_rules").TextHighlightRules;var d=function(){var n=g.arrayToMap(("break|do|else|elseif|end|for|function|if|in|local|repeat|return|then|until|while|or|and|not").split("|"));
var q=g.arrayToMap(("true|false|nil|_G|_VERSION").split("|"));var l=g.arrayToMap(("string|xpcall|package|tostring|print|os|unpack|require|getfenv|setmetatable|next|assert|tonumber|io|rawequal|collectgarbage|getmetatable|module|rawset|math|debug|pcall|table|newproxy|type|coroutine|_G|select|gcinfo|pairs|rawget|loadstring|ipairs|_VERSION|dofile|setfenv|load|error|loadfile|sub|upper|len|gfind|rep|find|match|char|dump|gmatch|reverse|byte|format|gsub|lower|preload|loadlib|loaded|loaders|cpath|config|path|seeall|exit|setlocale|date|getenv|difftime|remove|time|clock|tmpname|rename|execute|lines|write|close|flush|open|output|type|read|stderr|stdin|input|stdout|popen|tmpfile|log|max|acos|huge|ldexp|pi|cos|tanh|pow|deg|tan|cosh|sinh|random|randomseed|frexp|ceil|floor|rad|abs|sqrt|modf|asin|min|mod|fmod|log10|atan2|exp|sin|atan|getupvalue|debug|sethook|getmetatable|gethook|setmetatable|setlocal|traceback|setfenv|getinfo|setupvalue|getlocal|getregistry|getfenv|setn|insert|getn|foreachi|maxn|foreach|concat|sort|remove|resume|yield|status|wrap|create|running").split("|"));
var r=g.arrayToMap(("string|package|os|io|math|debug|table|coroutine").split("|"));var k=g.arrayToMap(("__add|__sub|__mod|__unm|__concat|__lt|__index|__call|__gc|__metatable|__mul|__div|__pow|__len|__eq|__le|__newindex|__tostring|__mode|__tonumber").split("|"));
var w=g.arrayToMap(("").split("|"));var u=g.arrayToMap(("setn|foreach|foreachi|gcinfo|log10|maxn").split("|"));var s="";var p="(?:(?:[1-9]\\d*)|(?:0))";
var j="(?:0[xX][\\dA-Fa-f]+)";var m="(?:"+p+"|"+j+")";var v="(?:\\.\\d+)";var h="(?:\\d+)";var o="(?:(?:"+h+"?"+v+")|(?:"+h+"\\.))";var t="(?:"+o+")";var i=[];
this.$rules={start:[{token:"comment",regex:s+"\\-\\-\\[\\[.*\\]\\]"},{token:"comment",regex:s+"\\-\\-\\[\\=\\[.*\\]\\=\\]"},{token:"comment",regex:s+"\\-\\-\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"comment",regex:s+"\\-\\-\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"comment",regex:s+"\\-\\-\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"comment",regex:s+"\\-\\-\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"comment",regex:s+"\\-\\-\\[\\[.*$",merge:true,next:"qcomment"},{token:"comment",regex:s+"\\-\\-\\[\\=\\[.*$",merge:true,next:"qcomment1"},{token:"comment",regex:s+"\\-\\-\\[\\={2}\\[.*$",merge:true,next:"qcomment2"},{token:"comment",regex:s+"\\-\\-\\[\\={3}\\[.*$",merge:true,next:"qcomment3"},{token:"comment",regex:s+"\\-\\-\\[\\={4}\\[.*$",merge:true,next:"qcomment4"},{token:function(z){var y=/\-\-\[(\=+)\[/,x;
if((x=y.exec(z))!=null&&(x=x[1])!=undefined){i.push(x.length);}return"comment";},regex:s+"\\-\\-\\[\\={5}\\=*\\[.*$",merge:true,next:"qcomment5"},{token:"comment",regex:"\\-\\-.*$"},{token:"string",regex:s+"\\[\\[.*\\]\\]"},{token:"string",regex:s+"\\[\\=\\[.*\\]\\=\\]"},{token:"string",regex:s+"\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"string",regex:s+"\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"string",regex:s+"\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"string",regex:s+"\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"string",regex:s+"\\[\\[.*$",merge:true,next:"qstring"},{token:"string",regex:s+"\\[\\=\\[.*$",merge:true,next:"qstring1"},{token:"string",regex:s+"\\[\\={2}\\[.*$",merge:true,next:"qstring2"},{token:"string",regex:s+"\\[\\={3}\\[.*$",merge:true,next:"qstring3"},{token:"string",regex:s+"\\[\\={4}\\[.*$",merge:true,next:"qstring4"},{token:function(z){var y=/\[(\=+)\[/,x;
if((x=y.exec(z))!=null&&(x=x[1])!=undefined){i.push(x.length);}return"string";},regex:s+"\\[\\={5}\\=*\\[.*$",merge:true,next:"qstring5"},{token:"string",regex:s+'"(?:[^\\\\]|\\\\.)*?"'},{token:"string",regex:s+"'(?:[^\\\\]|\\\\.)*?'"},{token:"constant.numeric",regex:t},{token:"constant.numeric",regex:m+"\\b"},{token:function(x){if(n.hasOwnProperty(x)){return"keyword";
}else{if(q.hasOwnProperty(x)){return"constant.language";}else{if(w.hasOwnProperty(x)){return"invalid.illegal";}else{if(r.hasOwnProperty(x)){return"constant.library";
}else{if(u.hasOwnProperty(x)){return"invalid.deprecated";}else{if(l.hasOwnProperty(x)){return"support.function";}else{if(k.hasOwnProperty(x)){return"support.function";
}else{return"identifier";}}}}}}}},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"}],qcomment:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qcomment1:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qcomment2:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qcomment3:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qcomment4:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qcomment5:[{token:function(B){var A=/\](\=+)\]/,C=this.rules.qcomment5[0],x;
C.next="start";if((x=A.exec(B))!=null&&(x=x[1])!=undefined){var z=x.length,y;if((y=i.pop())!=z){i.push(y);C.next="qcomment5";}}return"comment";},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"comment",merge:true,regex:".+"}],qstring:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"string",merge:true,regex:".+"}],qstring1:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"string",merge:true,regex:".+"}],qstring2:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"string",merge:true,regex:".+"}],qstring3:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"string",merge:true,regex:".+"}],qstring4:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"string",merge:true,regex:".+"}],qstring5:[{token:function(B){var A=/\](\=+)\]/,C=this.rules.qstring5[0],x;
C.next="start";if((x=A.exec(B))!=null&&(x=x[1])!=undefined){var z=x.length,y;if((y=i.pop())!=z){i.push(y);C.next="qstring5";}}return"string";},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"string",merge:true,regex:".+"}]};
};f.inherits(d,a);b.LuaHighlightRules=d;});