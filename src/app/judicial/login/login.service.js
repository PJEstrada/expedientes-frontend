/**
 * Created by boris on 14/10/16.
 */
(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService() {
    // return {
    //   login: function (user) {
    //     $cookies.putObject('user', user);
    //     $cookies.put('logged_in', true);
    //   },
    //   logout: function () {
    //     $cookies.remove('user');
    //     $cookies.remove('logged_in');
    //   },
    //   isLoggedIn: function () {
    //     return $cookies.get('logged_in');
    //   },
    //   currentUser: function () {
    //     return $cookies.getObject('user');
    //   }
    // };
  }
})();
