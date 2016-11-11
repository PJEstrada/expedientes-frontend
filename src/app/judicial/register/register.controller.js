/**
 * Created by boris on 14/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($log, $window, AuthService) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (AuthService.isLoggedIn()){
        $window.location.href = '/';
        return false;
      }

      return true;
    };

    vm.email = '';
    vm.password = '';

    vm.submit = function () {
      AuthService.login({'user': {
        'id': 1,
        'email': vm.email,
        'name': 'name'
      }});

      $log.log("email", vm.email);
      $log.log("password", vm.password);

      $window.location.href = '/';
    }
  }

})();
