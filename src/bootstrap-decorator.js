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

  var table = function(args) {
    if (args.form.rows && args.form.rows.length > 0) {
      var tableContent = args.fieldFrag.querySelector('.table-content');

      args.form.rows.forEach(function(row) {
        var rowHtml = document.createElement('tr');
        if (row.showCondition) {
          rowHtml.setAttribute('ng-show', row.showCondition);
        }

        row.cols.forEach(function(col) {
          var childFrag = args.build([col], args.path + '.items', args.state);
          var colHtml = document.createElement('td');

          if (col.colspan) {
            colHtml.setAttribute('colspan', col.colspan);
          }

          colHtml.appendChild(childFrag);

          rowHtml.appendChild(colHtml);
        });

        tableContent.appendChild(rowHtml);
      });
    }
  };

  var complexTransclusion = function(args) {
    var children = args.build(args.form.items, args.path + '.items', args.state);
    var contentElement =
      args.fieldFrag.firstChild.querySelector('.sf-content') || args.fieldFrag.firstChild;
    contentElement.appendChild(children);
  };

  var relationBuilder = function(args) {
    if (!args.form.template) {
      args.form.template = "recordRepresentationRelation.html";
    }

    if (args.form.showRelationList === undefined) {
      args.form.showRelationList = true;
    }
  };

  var defaults = [sfField, ngModel, ngModelOptions, condition, attributes, typeahead, userTypeahead, addon];
  decoratorsProvider.defineDecorator('bootstrapDecorator', {
    textarea: {template: base + 'textarea.html', builder: defaults},
    fieldset: {template: base + 'fieldset.html', builder: [sfField, complexTransclusion, condition]},
    panel: {template: base + 'panel.html', builder: [sfField, complexTransclusion, condition]},
    array: {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    matrix: {template: base + 'matrix.html', builder: [sfField, ngModelOptions, ngModel, condition]},
    relation: {template: base + 'relation.html', builder: [sfField, ngModelOptions, ngModel, condition, relationBuilder]},
    label: {template: base + 'label.html', builder: defaults},
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
    measurement: {template: base + 'measurement.html', builder: [sfField, ngModelOptions, ngModel, condition, array, measurement]},
    measurementValue: {template: base + 'measurementValue.html', builder: defaults},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    table: {template: base + 'table.html', builder: [sfField, ngModel, table, condition]},
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
