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
define("ace/mode/coffee",["require","exports","module","ace/tokenizer","ace/mode/coffee_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/coffee","ace/range","ace/mode/text","ace/worker/worker_client","ace/lib/oop"],function(e,h,c){var k=e("../tokenizer").Tokenizer;
var j=e("./coffee_highlight_rules").CoffeeHighlightRules;var g=e("./matching_brace_outdent").MatchingBraceOutdent;var a=e("./folding/coffee").FoldMode;
var d=e("../range").Range;var f=e("./text").Mode;var b=e("../worker/worker_client").WorkerClient;var i=e("../lib/oop");function l(){this.$tokenizer=new k(new j().getRules());
this.$outdent=new g();this.foldingRules=new a();}i.inherits(l,f);(function(){var o=/(?:[({[=:]|[-=]>|\b(?:else|switch|try|catch(?:\s*[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$/;
var p=/^(\s*)#/;var m=/^\s*###(?!#)/;var n=/^\s*/;this.getNextLineIndent=function(t,r,s){var q=this.$getIndent(r);var u=this.$tokenizer.getLineTokens(r,t).tokens;
if(!(u.length&&u[u.length-1].type==="comment")&&t==="start"&&o.test(r)){q+=s;}return q;};this.toggleCommentLines=function(v,w,t,s){console.log("toggle");
var r=new d(0,0,0,0);for(var u=t;u<=s;++u){var q=w.getLine(u);if(m.test(q)){continue;}if(p.test(q)){q=q.replace(p,"$1");}else{q=q.replace(n,"$&#");}r.end.row=r.start.row=u;
r.end.column=q.length+1;w.replace(r,q);}};this.checkOutdent=function(s,q,r){return this.$outdent.checkOutdent(q,r);};this.autoOutdent=function(q,r,s){this.$outdent.autoOutdent(r,s);
};this.createWorker=function(q){var r=new b(["ace"],"ace/mode/coffee_worker","Worker");r.attachToDocument(q.getDocument());r.on("error",function(s){q.setAnnotations([s.data]);
});r.on("ok",function(s){q.clearAnnotations();});return r;};}).call(l.prototype);h.Mode=l;});define("ace/mode/coffee_highlight_rules",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,b,d){var g=c("../lib/lang");
var e=c("../lib/oop");var a=c("./text_highlight_rules").TextHighlightRules;e.inherits(f,a);function f(){var j="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*";
var l={token:"string",merge:true,regex:".+"};var k=g.arrayToMap(("this|throw|then|try|typeof|super|switch|return|break|by)|continue|catch|class|in|instanceof|is|isnt|if|else|extends|for|forown|finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|or|on|unless|until|and|yes").split("|"));
var i=g.arrayToMap(("true|false|null|undefined").split("|"));var n=g.arrayToMap(("case|const|default|function|var|void|with|enum|export|implements|interface|let|package|private|protected|public|static|yield|__hasProp|extends|slice|bind|indexOf").split("|"));
var h=g.arrayToMap(("Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|RangeError|String|SyntaxError|Error|EvalError|TypeError|URIError").split("|"));
var m=g.arrayToMap(("Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|encodeURIComponent|decodeURI|decodeURIComponent|RangeError|String|SyntaxError|Error|EvalError|TypeError|URIError").split("|"));
this.$rules={start:[{token:"identifier",regex:"(?:(?:\\.|::)\\s*)"+j},{token:"variable",regex:"@(?:"+j+")?"},{token:function(o){if(k.hasOwnProperty(o)){return"keyword";
}else{if(i.hasOwnProperty(o)){return"constant.language";}else{if(n.hasOwnProperty(o)){return"invalid.illegal";}else{if(h.hasOwnProperty(o)){return"language.support.class";
}else{if(m.hasOwnProperty(o)){return"language.support.function";}else{return"identifier";}}}}}},regex:j},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"},{token:"string",merge:true,regex:"'''",next:"qdoc"},{token:"string",merge:true,regex:'"""',next:"qqdoc"},{token:"string",merge:true,regex:"'",next:"qstring"},{token:"string",merge:true,regex:'"',next:"qqstring"},{token:"string",merge:true,regex:"`",next:"js"},{token:"string.regex",merge:true,regex:"///",next:"heregex"},{token:"string.regex",regex:"/(?!\\s)[^[/\\n\\\\]*(?: (?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[/\\n\\\\]*)*/[imgy]{0,4}(?!\\w)"},{token:"comment",merge:true,regex:"###(?!#)",next:"comment"},{token:"comment",regex:"#.*"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\."},{token:"keyword.operator",regex:"(?:[\\-=]>|[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])"},{token:"paren.lparen",regex:"[({[]"},{token:"paren.rparen",regex:"[\\]})]"},{token:"text",regex:"\\s+"}],qdoc:[{token:"string",regex:".*?'''",next:"start"},l],qqdoc:[{token:"string",regex:'.*?"""',next:"start"},l],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",merge:true,next:"start"},l],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',merge:true,next:"start"},l],js:[{token:"string",merge:true,regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"start"},l],heregex:[{token:"string.regex",regex:".*?///[imgy]{0,4}",next:"start"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",merge:true,regex:"\\S+"}],comment:[{token:"comment",regex:".*?###",next:"start"},{token:"comment",merge:true,regex:".+"}]};
}b.CoffeeHighlightRules=f;});define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,b,d){var e=c("../range").Range;
var a=function(){};(function(){this.checkOutdent=function(f,g){if(!/^\s+$/.test(f)){return false;}return/^\s*\}/.test(g);};this.autoOutdent=function(k,l){var g=k.getLine(l);
var h=g.match(/^(\s*\})/);if(!h){return 0;}var i=h[1].length;var j=k.findMatchingBracket({row:l,column:i});if(!j||j.row==l){return 0;}var f=this.$getIndent(k.getLine(j.row));
k.replace(new e(l,0,l,i-1),f);};this.$getIndent=function(f){var g=f.match(/^(\s+)/);if(g){return g[1];}return"";};}).call(a.prototype);b.MatchingBraceOutdent=a;
});define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(b,a,c){var d=b("../../lib/oop");
var g=b("./fold_mode").FoldMode;var f=b("../../range").Range;var e=a.FoldMode=function(){};d.inherits(e,g);(function(){this.getFoldWidgetRange=function(o,k,s){var m=this.indentationBlock(o,s);
if(m){return m;}var r=/\S/;var t=o.getLine(s);var l=t.search(r);if(l==-1||t[l]!="#"){return;}var i=t.length;var p=o.getLength();var q=s;var j=s;while(++s<p){t=o.getLine(s);
var h=t.search(r);if(h==-1){continue;}if(t[h]!="#"){break;}j=s;}if(j>q){var n=o.getLine(j).length;return new f(q,i,j,n);}};this.getFoldWidget=function(n,j,o){var p=n.getLine(o);
var h=p.search(/\S/);var k=n.getLine(o+1);var i=n.getLine(o-1);var l=i.search(/\S/);var m=k.search(/\S/);if(h==-1){n.foldWidgets[o-1]=l!=-1&&l<m?"start":"";
return"";}if(l==-1){if(h==m&&p[h]=="#"&&k[h]=="#"){n.foldWidgets[o-1]="";n.foldWidgets[o+1]="";return"start";}}else{if(l==h&&p[h]=="#"&&i[h]=="#"){if(n.getLine(o-2).search(/\S/)==-1){n.foldWidgets[o-1]="start";
n.foldWidgets[o+1]="";return"";}}}if(l!=-1&&l<h){n.foldWidgets[o-1]="start";}else{n.foldWidgets[o-1]="";}if(h<m){return"start";}else{return"";}};}).call(e.prototype);
});define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(b,a,c){var e=b("../../range").Range;var d=a.FoldMode=function(){};
(function(){this.foldingStartMarker=null;this.foldingStopMarker=null;this.getFoldWidget=function(h,g,i){var f=h.getLine(i);if(this.foldingStartMarker.test(f)){return"start";
}if(g=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(f)){return"end";}return"";};this.getFoldWidgetRange=function(g,f,h){return null;
};this.indentationBlock=function(l,p,g){var o=/\S/;var q=l.getLine(p);var j=q.search(o);if(j==-1){return;}var h=g||q.length;var m=l.getLength();var n=p;
var i=p;while(++p<m){var f=l.getLine(p).search(o);if(f==-1){continue;}if(f<=j){break;}i=p;}if(i>n){var k=l.getLine(i).length;return new e(n,h,i,k);}};this.openingBracketBlock=function(j,l,k,h,f){var m={row:k,column:h+1};
var g=j.$findClosingBracket(l,m,f);if(!g){return;}var i=j.foldWidgets[g.row];if(i==null){i=this.getFoldWidget(j,g.row);}if(i=="start"&&g.row>m.row){g.row--;
g.column=j.getLine(g.row).length;}return e.fromPoints(m,g);};}).call(d.prototype);});