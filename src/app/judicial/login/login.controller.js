/**
 * Created by boris on 14/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $window, AuthService) {
    var vm = this;

    if (AuthService.isLoggedIn()){
      $window.location.href = '/';
    }

    vm.email = '';
    vm.password = '';

    vm.submit = function () {
      AuthService.login({'user': {
        'email': vm.email,
        'name': 'name'
      }});

      $log.log("email", vm.email);
      $log.log("password", vm.password);

      $window.location.href = '/';
    }
  }

})();
