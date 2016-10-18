(function() {
  'use strict';

  angular
      .module('frontendJudicial')
      .controller('MainController', MainController);
  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.expedientes = [
      {name: 'Name 1', user: 'User 1', date:'20/30/20'},
      {name: 'Name 2', user: 'User 2', date:'30/30/20'},
      {name: 'Name 3', user: 'User 3', date:'40/30/20'},
      {name: 'Name 4', user: 'User 4', date:'50/30/20'}
    ];
  }

})();
