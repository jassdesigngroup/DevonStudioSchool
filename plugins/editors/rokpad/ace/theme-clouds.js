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
define("ace/theme/clouds",["require","exports","module","ace/lib/dom"],function(b,a,c){a.isDark=false;a.cssClass="ace-clouds";a.cssText='.ace-clouds .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-clouds .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-clouds .ace_gutter {  background: #ebebeb;  color: #333;}.ace-clouds .ace_print_margin {  width: 1px;  background: #e8e8e8;}.ace-clouds .ace_scroller {  background-color: #FFFFFF;}.ace-clouds .ace_text-layer {  color: #000000;}.ace-clouds .ace_cursor {  border-left: 2px solid #000000;}.ace-clouds .ace_cursor.ace_overwrite {  border-left: 0px;  border-bottom: 1px solid #000000;}.ace-clouds .ace_marker-layer .ace_selection {  background: #BDD5FC;}.ace-clouds.multiselect .ace_selection.start {  box-shadow: 0 0 3px 0px #FFFFFF;  border-radius: 2px;}.ace-clouds .ace_marker-layer .ace_step {  background: rgb(255, 255, 0);}.ace-clouds .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid #BFBFBF;}.ace-clouds .ace_marker-layer .ace_active_line {  background: #FFFBD1;}.ace-clouds .ace_gutter_active_line {  background-color : #dcdcdc;}.ace-clouds .ace_marker-layer .ace_selected_word {  border: 1px solid #BDD5FC;}.ace-clouds .ace_invisible {  color: #BFBFBF;}.ace-clouds .ace_keyword, .ace-clouds .ace_meta {  color:#AF956F;}.ace-clouds .ace_keyword.ace_operator {  color:#484848;}.ace-clouds .ace_constant.ace_language {  color:#39946A;}.ace-clouds .ace_constant.ace_numeric {  color:#46A609;}.ace-clouds .ace_invalid {  background-color:#FF002A;}.ace-clouds .ace_fold {    background-color: #AF956F;    border-color: #000000;}.ace-clouds .ace_support.ace_function {  color:#C52727;}.ace-clouds .ace_storage {  color:#C52727;}.ace-clouds .ace_string {  color:#5D90CD;}.ace-clouds .ace_comment {  color:#BCC8BA;}.ace-clouds .ace_entity.ace_other.ace_attribute-name {  color:#606060;}.ace-clouds .ace_markup.ace_underline {    text-decoration:underline;}.ace-clouds .ace_indent-guide {  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
var d=b("../lib/dom");d.importCssString(a.cssText,a.cssClass);});