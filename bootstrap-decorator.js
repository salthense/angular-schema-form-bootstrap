angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/bootstrap/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/bootstrap/actions.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" value=\"{{item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{ item.style || \'btn-default\' }} {{form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{item.icon}}\"></span>{{item.title}}</button></div>");
$templateCache.put("decorators/bootstrap/array.html","<div class=\"schema-form-array {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><legend class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</legend><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" style=\"position: relative; z-index: 20;\" type=\"button\" class=\"close pull-right\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn {{ form.style.add || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</button></div></div>");
$templateCache.put("decorators/bootstrap/checkbox.html","<div class=\"checkbox schema-form-checkbox {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"{{form.labelHtmlClass}}\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.title\"></span> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span></label><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkboxes.html","<div sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"form-group schema-form-checkboxes {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/default.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label> <input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError(), \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/exmodule.html","<div sf-field-model=\"sf-exmodule\" sf-exmodule=\"\" class=\"{{form.outerClass}}\"><div class=\"{{form.htmlClass}}\"><div class=\"sfExmodule\" ng-click=\"clickEvent()\"><span ng-if=\"form.labelClass\" ng-class=\"form.labelClass\"></span> {{ form.label }}</div></div></div>");
$templateCache.put("decorators/bootstrap/fieldset.html","<div class=\"{{form.outerClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</legend><fieldset ng-disabled=\"form.readonly\" class=\"sf-content schema-form-fieldset {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></fieldset></div>");
$templateCache.put("decorators/bootstrap/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" ng-bind-html=\"form.helpvalue\"></div>");
$templateCache.put("decorators/bootstrap/image.html","<div class=\"form-group {{ form.htmlClass }}\"><label class=\"control-label\" ng-class=\"{\'sr-only\': !showTitle(), \'{{form.labelHtmlClass}}\': true}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label> <a colorbox=\"\" class=\"image-lightbox\" ng-href=\"types/{{ schema.title }}/images/{{ form.file }}\"><img ng-src=\"types/{{ schema.title }}/images/thumbnail_{{ form.file }}\"></a></div>Test: {{form.labelHtmlClass}}");
$templateCache.put("decorators/bootstrap/link.html","<div class=\"schema-form-link {{form.outerClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"\" sf-link=\"\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label><div><input ng-model=\"inputValue\" ng-change=\"change()\" typeahead-on-select=\"setLink($item, $model, $label, $event, $index)\"> <span class=\"glyphicon\" ng-class=\"{\'glyphicon-remove\': !isValueSet, \'glyphicon-ok\': isValueSet}\"></span></div></div>");
$templateCache.put("decorators/bootstrap/linkRepresentation.html","<div sf-field-model=\"\" sf-link-representation=\"\"><div ng-if=\"representationDatas !== undefined\" ng-include=\"\'types/\' + recordTitle + \'/\' + template\"></div></div>");
$templateCache.put("decorators/bootstrap/matrix.html","<div class=\"schema-form-matrix {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-matrix\" sf-matrix=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><table class=\"table\"><thead><tr><th></th><th ng-repeat=\"column in matrixColumns\">{{column}}</th></tr></thead><tbody><tr ng-repeat=\"row in matrixRows track by $index\" ng-class=\"rowClass($index)\" class=\"matrix-row-{{row | alphaNumeric}}\"><td colspan=\"{{1 + matrixColumns.length}}\" ng-show=\"!activeGroups[getGroupForRow($index).group - 1] && isFirstInGroup($index)\"><button type=\"button\" name=\"button\" ng-click=\"activeGroups[getGroupForRow($index).group - 1] = true\"><span class=\"glyphicon glyphicon-plus\"></span></button></td><td ng-show=\"activeGroups[getGroupForRow($index).group - 1]\">{{row}}</td><td ng-show=\"activeGroups[getGroupForRow($parent.$index).group - 1]\" ng-repeat=\"column in matrixColumns\"><input type=\"checkbox\" ng-disabled=\"form.readonly\" ng-model=\"matrixElements[matrixMap[row][column]].selected\" ng-change=\"setGroupState($parent.$index, matrixElements[matrixMap[row][column]].selected)\" class=\"{{form.fieldHtmlClass}}\"></td></tr></tbody></table></div>");
$templateCache.put("decorators/bootstrap/measurement.html","<div class=\"schema-form-array {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><button class=\"btn btn-default\" type=\"button\" data-toggle=\"modal\" data-target=\"#measurementModal{{form.key.slice(-1)[0]}}\">{{::form.i18n.insertDataBtn || \'insert data\'}}</button><div id=\"measurementModal{{form.key.slice(-1)[0]}}\" class=\"modal fade\" tabindex=\"-1\" measurements=\"\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"modal-title\">{{::form.i18n.modalTitle || \'please insert data for\'}}: {{form.title}}</div></div><div class=\"modal-body\"><div class=\"row\"><div id=\"measurementContainer{{form.key.slice(-1)[0]}}\"><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\"><li class=\"list-group-item measurement {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"></li></ol><div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div class=\"modal-footer\"><button id=\"resetBtn{{form.key.slice(-1)[0]}}\" class=\"btn btn-default\" type=\"button\" ng-click=\"reset(form)\">{{::form.i18n.resetDataBtn || \'reset\'}}</button></div></div></div></div></div></div>");
$templateCache.put("decorators/bootstrap/measurementValue.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}\"><input ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" class=\"form-control {{form.fieldHtmlClass}} col-md-6 measurementValue\" id=\"{{form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError(), \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/panel.html","<div ng-disabled=\"form.readonly\" class=\"block-{{form.title}} panel schema-form-fieldset {{form.htmlClass}} panel-section\" ng-class=\"{{form.ngClass}}\"><div class=\"panel-heading\" ng-class=\"{\'sr-only\': !showTitle() }\">{{ form.title }}</div><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div><div class=\"sf-content panel-body\"></div></div>");
$templateCache.put("decorators/bootstrap/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><div><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label></div><div class=\"btn-group\"><label sf-field-model=\"replaceAll\" class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" style=\"display: none;\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\">{{form.title}}</label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{form.title}}</label><div class=\"radio\" ng-repeat=\"item in form.titleMap\"><label><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/relation.html","<div class=\"schema-form-relation {{form.outerClass}}\" ng-class=\"{{form.ngClass}}\" sf-field-model=\"sf-relation\" sf-relation=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label><div ng-if=\"records.length === 0 || records === undefined\">Keine Verknüpfungen gefunden</div><div ng-if=\"records.length > 0\" class=\"{{form.htmlClass}}\" ng-repeat=\"record in records\"><div ng-click=\"editRecord(record)\" ng-include=\"\'types/\' + recordTitle + \'/recordRepresentationRelation.html\'\" class=\"{{form.innerClass}}\"></div><div ng-if=\"relations !== undefined && linkedSchemaTitle !== undefined\" ng-include=\"\'types/\' + linkedSchemaTitle + \'/relationList.html\'\"></div></div></div>");
$templateCache.put("decorators/bootstrap/section.html","<div class=\"schema-form-section {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"></div>");
$templateCache.put("decorators/bootstrap/select.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-class=\"{{form.ngClass}}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{form.title}}</label><select sf-field-model=\"\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"form-control {{form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\" name=\"{{form.key.slice(-1)[0]}}\"></select><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-warning-sign\': hasWarning() }\" aria-hidden=\"true\"></span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><input type=\"submit\" class=\"btn {{ form.style || \'btn-primary\' }} {{form.fieldHtmlClass}}\" value=\"{{form.title}}\" ng-disabled=\"form.readonly\" ng-if=\"form.type === \'submit\'\"> <button class=\"btn {{ form.style || \'btn-default\' }}\" type=\"button\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span> {{form.title}}</button></div>");
$templateCache.put("decorators/bootstrap/tabarray.html","<div ng-init=\"selected = { tab: 0 }\" ng-model=\"modelArray\" schema-validate=\"form\" sf-field-model=\"sf-new-array\" sf-new-array=\"\" ng-class=\"{{form.ngClass}}\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || \'left\'}} {{form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix tab{{selected.tab}} index{{$index}}\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-show=\"selected.tab === $index\" ng-class=\"{active: selected.tab === $index}\"><div schema-form-array-items=\"\"></div><button ng-hide=\"form.readonly\" ng-click=\"selected.tab = deleteFromArray($index).length - 1\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"btn {{ form.style.remove || \'btn-default\' }} pull-right\"><i class=\"glyphicon glyphicon-trash\"></i> {{ form.remove || \'Remove\'}}</button></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{ form.add || \'Add\'}}</a></li></ul></div>");
$templateCache.put("decorators/bootstrap/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\" ng-class=\"{{form.ngClass}}\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = $index)\" class=\"panel-{{schema.title.toLowerCase()}}-{{tab.title.toLowerCase()}}\" ng-class=\"{active: selected.tab === $index}\"><a href=\"#\">{{ tab.title }}</a></li></ul><div class=\"tab-content {{form.fieldHtmlClass}}\"></div></div>");
$templateCache.put("decorators/bootstrap/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess()}\"><label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label> <textarea class=\"form-control {{form.fieldHtmlClass}}\" id=\"{{form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\"></textarea> <span class=\"help-block\" sf-message=\"form.description\"></span></div>");}]);
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		},
		createImg: function() {
			var img = new Image();
			var attrs = $(this).data('cbox-img-attrs');

			if (typeof attrs === 'object') {
				$.each(attrs, function(key, val){
					img[key] = val;
				});
			}

			return img;
		},
		createIframe: function() {
			var iframe = document.createElement('iframe');
			var attrs = $(this).data('cbox-iframe-attrs');

			if (typeof attrs === 'object') {
				$.each(attrs, function(key, val){
					iframe[key] = val;
				});
			}

			if ('frameBorder' in iframe) {
				iframe.frameBorder = 0;
			}
			if ('allowTransparency' in iframe) {
				iframe.allowTransparency = "true";
			}
			iframe.name = (new Date()).getTime(); // give the iframe a unique name to prevent caching
			iframe.allowFullscreen = true;

			return iframe;
		}
	},

	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',

	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2

	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************

	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}

	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;

		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}

	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated(rel) {
		index = 0;

		if (rel && rel !== false && rel !== 'nofollow') {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);

			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();

			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data(colorbox);

			settings = new Settings(element, options);

			getRelated(settings.get('rel'));

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));

				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block', opacity:''});

				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				var initialWidth = setSize(settings.get('initialWidth'), 'x');
				var initialHeight = setSize(settings.get('initialHeight'), 'y');
				var maxWidth = settings.get('maxWidth');
				var maxHeight = settings.get('maxHeight');

				settings.w = Math.max((maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth, 0);
				settings.h = Math.max((maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight, 0);

				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();

				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);

						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			var opacity = parseFloat(settings.get('opacity'));
			$overlay.css({
				opacity: opacity === opacity ? opacity : '',
				cursor: settings.get('overlayClose') ? 'pointer' : '',
				visibility: 'visible'
			}).show();

			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $('<button type="button"/>').attr({id:prefix+'Slideshow'}),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});

			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});

			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');

			$groupControls = $next.add($prev).add($current).add($slideshow);
		}
		if (document.body && !$box.parent().length) {
			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});

				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($[colorbox]) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************

	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		}

		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}

		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);

			if (settings.get('open')) {
				launch($obj[0]);
			}
		}

		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;

		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}

		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});

		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";

		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();

				active = false;

				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";

				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if ($.isFunction(loadedCallback)) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;

		if (open) {
			options = options || {};

			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});

			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}

			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}

		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);

		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}

		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);

		$loadingBay.hide();

		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.

		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;

			if (!open) {
				return;
			}

			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}

			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};


			$title.html(settings.get('title')).show();
			$loaded.show();

			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}

				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));

				slideshow();

				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}

			if (settings.get('iframe')) {

				iframe = settings.get('createIframe');

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}

				$(iframe)
					.attr({
						src: settings.get('href'),
						'class': prefix + 'Iframe'
					})
					.one('load', complete)
					.appendTo($loaded);

				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}

			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};

		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;

		active = true;

		photo = false;

		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');

		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');

		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');

		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;

		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}

		href = settings.get('href');

		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);

		if (settings.get('inline')) {
			var $target = $(href).eq(0);
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $('<div>').hide().insertBefore($target);

			$events.one(event_purge, function () {
				$inline.replaceWith($target);
			});

			prep($target);
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = settings.get('createImg');

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error.'+prefix,function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				if (request !== requests) {
					return;
				}

				// A small pause because some browsers will occassionaly report a
				// img.width and img.height of zero immediately after the img.onload fires
				setTimeout(function(){
					var percent;

					if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
						photo.height = photo.height / window.devicePixelRatio;
						photo.width = photo.width / window.devicePixelRatio;
					}

					if (settings.get('scalePhotos')) {
						setResize = function () {
							photo.height -= photo.height * percent;
							photo.width -= photo.width * percent;
						};
						if (settings.mw && photo.width > settings.mw) {
							percent = (photo.width - settings.mw) / photo.width;
							setResize();
						}
						if (settings.mh && photo.height > settings.mh) {
							percent = (photo.height - settings.mh) / photo.height;
							setResize();
						}
					}

					if (settings.h) {
						photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
					}

					if ($related[1] && (settings.get('loop') || $related[index + 1])) {
						photo.style.cursor = 'pointer';

						$(photo).bind('click.'+prefix, function () {
							publicMethod.next();
						});
					}

					photo.style.width = photo.width + 'px';
					photo.style.height = photo.height + 'px';
					prep(photo);
				}, 1);
			});

			photo.src = href;

		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}

	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};

	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {

			closing = true;
			open = false;
			trigger(event_cleanup);
			settings.get('onCleanup');
			$window.unbind('.' + prefix);
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);

			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
				$box.hide();
				$overlay.hide();
				trigger(event_purge);
				$loaded.remove();

				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$[colorbox].close();
		$box.stop(false, true).remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));

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
          jumpToNavigation.className = 'btn-group-wrap jump-to-wrap';
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
