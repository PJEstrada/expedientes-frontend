/**
 * Created by boris on 14/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log) {
    var vm = this;

    vm.email = '';
    vm.password = '';

    vm.submit = function () {
      $log.log("email", vm.email);
      $log.log("password", vm.password);
    }
  }

})();
