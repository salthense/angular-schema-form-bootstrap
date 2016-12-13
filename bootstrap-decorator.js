angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/bootstrap/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/bootstrap/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button></div>");
$templateCache.put("decorators/bootstrap/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><legend class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</legend><ol class=\"list-group {{form.innerClass}}\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div></div>");
$templateCache.put("decorators/bootstrap/checkbox.html","<div class=\"checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"{{form.labelHtmlClass}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\"><span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span> <input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.title\" ng-if=\"!form.notitle\"></span> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span></label><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkboxes.html","<div sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span> <input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/default.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label> <input ng-show=\"form.key\" type=\"{{form.type}}\" lang=\"de-DE\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError(), \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/exmodule.html","<div sf-field-model=\"sf-exmodule\" sf-exmodule=\"\" class=\"{{form.outerClass}}\"><div class=\"{{form.htmlClass}}\"><div class=\"sfExmodule\" ng-click=\"clickEvent()\"><span ng-if=\"form.labelClass\" ng-class=\"form.labelClass\"></span> {{ form.label }}</div></div></div>");
$templateCache.put("decorators/bootstrap/fieldset.html","<div class=\"{{form.outerClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{ form.title }} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></legend><fieldset ng-disabled=\"form.readonly\" class=\"sf-content schema-form-fieldset {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></fieldset></div>");
$templateCache.put("decorators/bootstrap/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/bootstrap/image.html","<div class=\"form-group {{ form.htmlClass }}\"><label class=\"control-label\" ng-class=\"{\'sr-only\': !showTitle(), \'{{form.labelHtmlClass}}\': true}\" for=\"{{form.key.slice(-1)[0]}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label> <a colorbox=\"\" class=\"image-lightbox\" ng-href=\"types/{{ schema.title }}/images/{{ form.file }}\"><img ng-src=\"types/{{ schema.title }}/images/thumbnail_{{ form.file }}\"></a></div>Test: {{form.labelHtmlClass}}");
$templateCache.put("decorators/bootstrap/link.html","<div class=\"schema-form-link form-group has-feedback {{form.outerClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"\" sf-link=\"\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label> <input class=\"form-control\" ng-disabled=\"form.readonly\" ng-model=\"inputValue\" ng-change=\"change()\" typeahead-on-select=\"setLink($item, $model, $label, $event, $index)\"> <span class=\"glyphicon form-control-feedback\" ng-class=\"{\'glyphicon-remove\': !isValueSet, \'glyphicon-ok\': isValueSet}\"></span></div>");
$templateCache.put("decorators/bootstrap/linkRepresentation.html","<div sf-field-model=\"\" sf-link-representation=\"\"><div ng-if=\"representationDatas !== undefined\" ng-include=\"\'types/\' + recordTitle + \'/\' + template\"></div></div>");
$templateCache.put("decorators/bootstrap/matrix.html","<div class=\"schema-form-matrix {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-matrix\" sf-matrix=\"\"><label class=\"control-label\" ng-show=\"showTitle()\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{ form.title }} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label><table class=\"table\"><thead><tr><th></th><th ng-repeat=\"column in matrixColumns\">{{column}}</th></tr></thead><tbody><tr ng-repeat=\"row in matrixRows track by $index\" ng-class=\"rowClass($index)\" class=\"matrix-row-{{row | alphaNumeric}}\"><td colspan=\"{{1 + matrixColumns.length}}\" ng-show=\"!activeGroups[getGroupForRow($index).group - 1] && isFirstInGroup($index)\"><button type=\"button\" name=\"button\" ng-click=\"activeGroups[getGroupForRow($index).group - 1] = true\"><span class=\"glyphicon glyphicon-plus\"></span></button></td><td ng-show=\"activeGroups[getGroupForRow($index).group - 1]\">{{row}}</td><td ng-show=\"activeGroups[getGroupForRow($parent.$index).group - 1]\" ng-repeat=\"column in matrixColumns\"><input type=\"checkbox\" ng-disabled=\"form.readonly\" ng-model=\"matrixElements[matrixMap[row][column]].selected\" ng-change=\"setGroupState($parent.$index, matrixElements[matrixMap[row][column]].selected)\" class=\"{{form.fieldHtmlClass}}\"></td></tr></tbody></table></div>");
$templateCache.put("decorators/bootstrap/measurement.html","<div class=\"schema-form-array {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><button class=\"btn btn-default\" type=\"button\" data-toggle=\"modal\" data-target=\"#measurementModal{{form.key.join(\'\')}}\">{{::form.i18n.insertDataBtn || \'insert data\'}}</button><div id=\"measurementModal{{form.key.join(\'\')}}\" class=\"modal fade\" tabindex=\"-1\" measurements=\"\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"modal-title\">{{::form.i18n.modalTitle || \'please insert data for\'}}: {{form.title}}</div></div><div class=\"modal-body\"><div class=\"row\"><div id=\"measurementContainer{{form.key.join(\'\')}}\"><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item measurement {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div class=\"modal-footer\"><button id=\"resetBtn{{form.key.join(\'\')}}\" class=\"btn btn-default\" type=\"button\" ng-click=\"reset(form)\">{{::form.i18n.resetDataBtn || \'reset\'}}</button> <button class=\"btn btn-default\" type=\"button\" data-dismiss=\"modal\">Schließen</button></div></div></div></div></div></div>");
$templateCache.put("decorators/bootstrap/measurementValue.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label>{{getLabel(form.titleSchema, $index)}}</label> <input ng-show=\"form.key\" type=\"{{form.schema.type}}\" step=\"any\" lang=\"de-DE\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}} col-md-6 measurementValue\" id=\"{{form.key.join(\'\') + $index}}\" ng-model=\"item[form.key.slice(-1)[0]]\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.join(\'\') + $index}}\" aria-describedby=\"{{form.key.join(\'\') + $index + \'Status\'}}\"> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError(), \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.join(\'\') + $index + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/panel.html","<div ng-disabled=\"form.readonly\" class=\"block-{{form.title}} panel schema-form-fieldset {{form.htmlClass}} panel-section\" ng-class=\"{{form.ngClass}}\"><div class=\"panel-heading\" ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</div><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><div class=\"sf-content panel-body\"></div></div>");
$templateCache.put("decorators/bootstrap/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label></div><div class=\"btn-group\"><label sf-field-model=\"replaceAll\" class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label><div class=\"radio\" ng-repeat=\"item in form.titleMap\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/relation.html","<div class=\"schema-form-relation {{form.outerClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-relation\" sf-relation=\"\"><label class=\"control-label\" ng-show=\"showTitle()\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{ form.title }} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label><div ng-if=\"records.length === 0 || records === undefined\">Keine Verknüpfungen gefunden</div><div ng-if=\"records.length > 0\" class=\"{{form.htmlClass}}\" ng-repeat=\"record in records\"><div ng-click=\"editRecord(record)\" ng-include=\"\'types/\' + recordTitle + \'/recordRepresentationRelation.html\'\" class=\"{{form.innerClass}}\"></div><div ng-if=\"relations !== undefined && linkedSchemaTitle !== undefined\" ng-include=\"\'types/\' + linkedSchemaTitle + \'/relationList.html\'\"></div></div></div>");
$templateCache.put("decorators/bootstrap/section.html","<div class=\"schema-form-section {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"></div>");
$templateCache.put("decorators/bootstrap/select.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label><select sf-field-model=\"\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"form-control {{form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\" name=\"{{form.key.slice(-1)[0]}}\"></select><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><input type=\"submit\" class=\"btn {{ form.style || \'btn-primary\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"btn {{ form.style || \'btn-default\' }}\" type=\"button\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span> {{form.title}}</button></div>");
$templateCache.put("decorators/bootstrap/tabarray.html","<div ng-init=\"selected = { tab: 0 }\" ng-model=\"modelArray\" schema-validate=\"form\" sf-field-model=\"sf-new-array\" sf-new-array=\"\" ng-class=\"{{form.ngClass}}\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix tab{{selected.tab}} index{{$index}}\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><div schema-form-array-items=\"\"></div><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div>");
$templateCache.put("decorators/bootstrap/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" class=\"panel-{{schema.title.toLowerCase()}}-{{tab.title.toLowerCase()}}\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"></div></div>");
$templateCache.put("decorators/bootstrap/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\" data-trigger=\"hover\" placement=\"auto right\" data-content=\"{{form.popover}}\">{{form.title}} <span class=\"glyphicon glyphicon-info-sign\" ng-show=\"{{form.popover}}\"></span></label> <textarea class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea> <span class=\"help-block\" sf-message=\"form.description\"></span></div>");}]);
var app = angular.module('schemaForm')

app.config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/bootstrap/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;
  var attributes          = sfBuilderProvider.builders.attributes;
  var typeahead           = sfBuilderProvider.builders.typeahead;
  var userTypeahead       = sfBuilderProvider.builders.userTypeahead;
  var link                = sfBuilderProvider.builders.link;
  var measurement         = sfBuilderProvider.builders.measurement;
  var measurementValue    = sfBuilderProvider.builders.measurementValue;
  var addon               = sfBuilderProvider.builders.addon;

  // Tabs is so bootstrap specific that it stays here.
  var tabs = function(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var tabContent = args.fieldFrag.querySelector('.tab-content');

      args.form.tabs.forEach(function(tab, index) {
        var div = document.createElement('div');
        div.className = 'tab-pane';
        div.setAttribute('ng-disabled', 'form.readonly');
        div.setAttribute('ng-show', 'selected.tab === ' + index);
        div.setAttribute('ng-class', '{active: selected.tab === ' + index + '}');

        var tabContentWrap = document.createElement('div');
        tabContentWrap.className = 'tab-content-wrap';
        div.appendChild(tabContentWrap);

        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);

        if (tab.jumpToNavigation) {
          $(tabContent).addClass('contains-jump-to-navigation');
          var jumpToNavigation = document.createElement('div');
          jumpToNavigation.className = 'btn-group-wrap jump-to-wrap hidden-xs hidden-sm';
          var buttonGroup = document.createElement('div');
          buttonGroup.setAttribute('class', 'btn-group affix-btn-group');

          var topLink = document.createElement('button');
          topLink.setAttribute('type', 'button');
          topLink.setAttribute('class', 'btn btn-info btn-jump-to btn-jump-to-top');

          var topSpan = document.createElement('span');
          topSpan.setAttribute('class', 'glyphicon glyphicon-chevron-up');

          topLink.appendChild(topSpan);

          topLink.addEventListener('click', function() {
            window.scrollTo(0, 0);
          });

          var topLinkWrapper = document.createElement('span');
          topLinkWrapper.appendChild(topLink)
          buttonGroup.appendChild(topLinkWrapper);

          var bottomLink = document.createElement('button');
          bottomLink.setAttribute('type', 'button');
          bottomLink.setAttribute('class', 'btn btn-info btn-jump-to btn-jump-to-bottom');

          var bottomSpan = document.createElement('span');
          bottomSpan.setAttribute('class', 'glyphicon glyphicon-chevron-down');

          bottomLink.appendChild(bottomSpan);

          bottomLink.addEventListener('click', function() {
            window.scrollTo(0, $(bottomLink).parents('form')[0].getBoundingClientRect().bottom);
          });

          var bottomLinkWrapper = document.createElement('span');
          bottomLinkWrapper.appendChild(bottomLink)
          buttonGroup.appendChild(bottomLinkWrapper);

          tab.items.forEach(function(item, count) {
            var scrollToChild = childFrag.childNodes[count];
            var jumpLink = document.createElement('button');
            jumpLink.setAttribute('type', 'button');
            if (item.title && item.title.substr(0, 1) != '<') {
              var classes = 'btn btn-info btn-jump-to jump-to-' + item.title.toLowerCase().replace(/\W+/g, '-');
              if (index == 0 && count == 0) {
                classes = 'active ' +  classes;
              }
              jumpLink.setAttribute('class', classes);
            } else {
              jumpLink.setAttribute('class', 'btn btn-info btn-jump-to');
            }
            jumpLink.setAttribute('title', item.title);
            jumpLink.textContent = item.title;

            jumpLink.addEventListener('click', function() {
              window.scrollTo($(scrollToChild).offset().left, $(scrollToChild).offset().top - tab.jumpToNavigation.offset);
            });

            var jumpLinkWrapper = document.createElement('span');
            jumpLinkWrapper.appendChild(jumpLink)
            buttonGroup.appendChild(jumpLinkWrapper);
          });

          jumpToNavigation.appendChild(buttonGroup);
          div.insertBefore(jumpToNavigation, div.firstChild);

          if (tab.jumpToNavigation.affix) {
            $(buttonGroup).affix({
              offset: {
                top: function() {
                  return $(buttonGroup).parent().offset().top - tab.jumpToNavigation.offset;
                }
              }
            }).on('affix.bs.affix', function() {
              jumpToNavigation.style.height = $(jumpToNavigation).outerHeight() + 'px';
            });
          }
        }

        tabContentWrap.appendChild(childFrag);
        tabContent.appendChild(div);
      });
    }
  };

  // Tabs is so bootstrap specific that it stays here.
  var complexTransclusion = function(args) {
    var children = args.build(args.form.items, args.path + '.items', args.state);
    var contentElement =
      args.fieldFrag.firstChild.querySelector('.sf-content') || args.fieldFrag.firstChild;
    contentElement.appendChild(children);
  };

  var defaults = [sfField, ngModel, ngModelOptions, condition, attributes, typeahead, userTypeahead, addon];
  decoratorsProvider.defineDecorator('bootstrapDecorator', {
    textarea: {template: base + 'textarea.html', builder: defaults},
    fieldset: {template: base + 'fieldset.html', builder: [sfField, complexTransclusion, condition]},
    panel: {template: base + 'panel.html', builder: [sfField, complexTransclusion, condition]},
    array: {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    matrix: {template: base + 'matrix.html', builder: [sfField, ngModelOptions, ngModel, condition]},
    relation: {template: base + 'relation.html', builder: [sfField, ngModelOptions, ngModel, condition]},
    link: {template: base + 'link.html', builder: [sfField, ngModelOptions, ngModel, condition, link]},
    linkRepresentation: {template: base + 'linkRepresentation.html', builder: [sfField, ngModelOptions, ngModel, condition]},
    exmodule: {template: base + 'exmodule.html', builder: [sfField, ngModelOptions, ngModel, condition]},
    tabarray: {template: base + 'tabarray.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    tabs: {template: base + 'tabs.html', builder: [sfField, ngModelOptions, tabs, condition]},
    section: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    conditional: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    actions: {template: base + 'actions.html', builder: defaults},
    select: {template: base + 'select.html', builder: defaults},
    checkbox: {template: base + 'checkbox.html', builder: defaults},
    checkboxes: {template: base + 'checkboxes.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    number: {template: base + 'default.html', builder: defaults},
    measurement: {template: base + 'measurement.html', builder: [sfField, ngModel, ngModelOptions, condition, array, measurement]},
    measurementValue: {template: base + 'measurementValue.html', builder: defaults},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    help: {template: base + 'help.html', builder: defaults},
    image: {template: base + 'image.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);

app.filter('alphaNumeric', function() {
  return function(text) {
    return text.replace(/\W/g, '');
  }
});

function elementInViewport(element, offset) {
  var rect = element.getBoundingClientRect();
  // The offset makes it possible to recognize an element earlier. One example
  // where this might be necessary are fixed elements at the top of a page,
  // which make the viewport smaller.
  var offset = offset || 0;

  return (rect.bottom > 0 + offset && rect.top < window.innerHeight + offset);
}

function markActiveTab() {
  $('.btn-jump-to:focus').blur();
  $('.btn-jump-to.active').removeClass('active');

  $('.tab-pane.active .panel-section').each(function(pan) {
    if (elementInViewport($('.panel-section')[pan], 150)) {
      $('span:nth-child(' + (3 + pan) + ') .btn-jump-to').addClass('active');
      return false;
    }
  });
}
window.addEventListener('scroll', markActiveTab);
window.addEventListener('click', markActiveTab);

app.directive('colorbox', function() {
  return {
    controller: function() {
      $('.image-lightbox').colorbox();
    }
  }
});

app.filter('range', function() {
  return function (input, total) {
    total = parseInt(total);

    for (var i = 0; i < total; i++) {
      input.push(i);
    }

    return input;
  };
});
