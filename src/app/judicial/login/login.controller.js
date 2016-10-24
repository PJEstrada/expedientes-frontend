/**
 * Created by boris on 14/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController() {
    var vm = this;

    vm.email = '';
    vm.password = '';

    vm.submit = function () {
      console.log("email", vm.email);
      console.log("password", vm.password);
    }

  }

})();
