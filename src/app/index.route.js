(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/judicial/main.html',
            controller: 'MainController',
            controllerAs: 'ctrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/judicial/login/login.html',
            controller: 'LoginController',
            controllerAs: 'ctrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'app/judicial/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
  }

})();