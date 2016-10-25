/**
 * Created by boris on 24/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('TabController', TabController);

  /** @ngInject */
  function TabController() {
    var vm = this;
    vm.tabs = [{
      title: 'One',
      url: 'one.tpl.html'
    }, {
      title: 'Two',
      url: 'two.tpl.html'
    }, {
      title: 'Three',
      url: 'three.tpl.html'
    }];

    vm.current_tab = 'one.tpl.html';

    vm.onClickTab = function (tab) {
      vm.current_tab = tab['url'];
    };
    vm.isActiveTab = function (tabUrl) {
      return tabUrl == vm.current_tab;
    }
  }

})();
