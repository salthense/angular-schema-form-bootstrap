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
  var link                = sfBuilderProvider.builders.link;
  var measurement         = sfBuilderProvider.builders.measurement;
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

        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);

        if (tab.jumpToNavigation) {
          $(tabContent).addClass('contains-jump-to-navigation');
          var jumpToNavigation = document.createElement('div');
          jumpToNavigation.className = 'btn-group-wrap';
          var buttonGroup = document.createElement('div');
          buttonGroup.setAttribute('class', 'btn-group affix-btn-group');

          tab.items.forEach(function(item, count) {
            var scrollToChild = childFrag.childNodes[count];
            var jumpLink = document.createElement('button');
            jumpLink.setAttribute('type', 'button');
            if (item.title && item.title.substr(0, 1) != '<') {
              var classes = 'btn btn-info btn-jump-to jump-to-panel-' + count + ' panel-' +
                $('.list-group-item-info .active')[0].innerHTML.trim().toLowerCase() +
                '-' + item.title.toLowerCase();
              if (index == 0 && count == 0) {
                classes = 'active ' +  classes;
              }
              jumpLink.setAttribute('class', classes);
            } else {
              jumpLink.setAttribute('class', 'btn btn-info btn-jump-to jump-to-panel-' + count);
            }
            jumpLink.textContent = item.title;

            jumpLink.addEventListener('click', function() {
              window.scrollTo(scrollToChild.offsetLeft, scrollToChild.offsetTop - tab.jumpToNavigation.offset);
            });

            buttonGroup.appendChild(jumpLink);
          });

          var topLink = document.createElement('button');
          topLink.setAttribute('type', 'button');
          topLink.setAttribute('class', 'btn btn-info btn-jump-to');

          var topSpan = document.createElement('span');
          topSpan.setAttribute('class', 'glyphicon glyphicon-chevron-up');

          topLink.appendChild(topSpan);

          topLink.addEventListener('click', function() {
            window.scrollTo(0, 0);
          });

          buttonGroup.appendChild(topLink);

          var bottomLink = document.createElement('button');
          bottomLink.setAttribute('type', 'button');
          bottomLink.setAttribute('class', 'btn btn-info btn-jump-to');

          var bottomSpan = document.createElement('span');
          bottomSpan.setAttribute('class', 'glyphicon glyphicon-chevron-down');

          bottomLink.appendChild(bottomSpan);

          bottomLink.addEventListener('click', function() {
            window.scrollTo(0, document.body.offsetHeight);
          });

          buttonGroup.appendChild(bottomLink);

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
              jumpToNavigation.style.height = $(jumpToNavigation).height() + 'px';
            });
          }
        }

        div.appendChild(childFrag);
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

  var defaults = [sfField, ngModel, ngModelOptions, condition, attributes, typeahead, addon];
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
    measurement: {template: base + 'measurement.html', builder: [sfField, ngModel, ngModelOptions, condition, attributes, typeahead, addon, measurement]},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    help: {template: base + 'help.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);

app.filter('alphaNumeric', function() {
  return function(text) {
    return text.replace(/\W/g, '');
  }
});

function elementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (rect.top > 0 && rect.top < window.innerHeight);
}
function markActiveTab() {
  var found = false;
  $('.panel-section').each(function(pan) {
    if (elementInViewport($('.panel-section')[pan]) && !found) {
      $('.btn-jump-to.active').removeClass('active');
      var classes = $('.panel-section')[pan].getAttribute('class').split(' ');
      classes.forEach(function(cl) {
        if (cl.indexOf('panel-' + $('.list-group-item-info .active')[0].innerHTML.trim().toLowerCase()) >= 0) {
          $('button.' + cl).addClass('active');
          found = true;
        }
      });
    }
  });
}
window.addEventListener('scroll', function() {
  markActiveTab();
});
window.addEventListener('click', function() {
  markActiveTab();
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
