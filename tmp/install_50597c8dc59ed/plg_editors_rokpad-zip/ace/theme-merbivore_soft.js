/*
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define("ace/theme/merbivore_soft",["require","exports","module","ace/lib/dom"],function(b,a,c){a.isDark=true;a.cssClass="ace-merbivore-soft";a.cssText=".ace-merbivore-soft .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-merbivore-soft .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-merbivore-soft .ace_gutter {  background: #262424;  color: #E6E1DC;}.ace-merbivore-soft .ace_print_margin {  width: 1px;  background: #262424;}.ace-merbivore-soft .ace_scroller {  background-color: #1C1C1C;}.ace-merbivore-soft .ace_text-layer {  color: #E6E1DC;}.ace-merbivore-soft .ace_cursor {  border-left: 2px solid #FFFFFF;}.ace-merbivore-soft .ace_cursor.ace_overwrite {  border-left: 0px;  border-bottom: 1px solid #FFFFFF;}.ace-merbivore-soft .ace_marker-layer .ace_selection {  background: #494949;}.ace-merbivore-soft.multiselect .ace_selection.start {  box-shadow: 0 0 3px 0px #1C1C1C;  border-radius: 2px;}.ace-merbivore-soft .ace_marker-layer .ace_step {  background: rgb(102, 82, 0);}.ace-merbivore-soft .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid #404040;}.ace-merbivore-soft .ace_marker-layer .ace_active_line {  background: #333435;}.ace-merbivore-soft .ace_gutter_active_line {  background-color: #333435;}.ace-merbivore-soft .ace_marker-layer .ace_selected_word {  border: 1px solid #494949;}.ace-merbivore-soft .ace_invisible {  color: #404040;}.ace-merbivore-soft .ace_keyword, .ace-merbivore-soft .ace_meta {  color:#FC803A;}.ace-merbivore-soft .ace_constant, .ace-merbivore-soft .ace_constant.ace_other {  color:#68C1D8;}.ace-merbivore-soft .ace_constant.ace_character,  {  color:#68C1D8;}.ace-merbivore-soft .ace_constant.ace_character.ace_escape,  {  color:#68C1D8;}.ace-merbivore-soft .ace_constant.ace_language {  color:#E1C582;}.ace-merbivore-soft .ace_constant.ace_library {  color:#8EC65F;}.ace-merbivore-soft .ace_constant.ace_numeric {  color:#7FC578;}.ace-merbivore-soft .ace_invalid {  color:#FFFFFF;background-color:#FE3838;}.ace-merbivore-soft .ace_invalid.ace_deprecated {  color:#FFFFFF;background-color:#FE3838;}.ace-merbivore-soft .ace_support.ace_constant {  color:#8EC65F;}.ace-merbivore-soft .ace_fold {    background-color: #FC803A;    border-color: #E6E1DC;}.ace-merbivore-soft .ace_support.ace_type {  color:#68C1D8;}.ace-merbivore-soft .ace_storage {  color:#FC803A;}.ace-merbivore-soft .ace_string {  color:#8EC65F;}.ace-merbivore-soft .ace_comment {  font-style:italic;color:#AC4BB8;}.ace-merbivore-soft .ace_meta {  font-style:italic;color:#AC4BB8;}.ace-merbivore-soft .ace_meta.ace_tag {  color:#FC803A;}.ace-merbivore-soft .ace_entity.ace_other.ace_attribute-name {  color:#EAF1A3;}.ace-merbivore-soft .ace_markup.ace_underline {    text-decoration:underline;}.ace-merbivore-soft .ace_indent-guide {  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWOQkZH5zzBz5sz/AA8EBB6crd1rAAAAAElFTkSuQmCC) right repeat-y;}";
var d=b("../lib/dom");d.importCssString(a.cssText,a.cssClass);});