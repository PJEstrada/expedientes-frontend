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
      })
      .state('crear_expediente', {
        url: '/crear_expediente',
        templateUrl: 'app/judicial/expediente/crear_expediente/crear_expediente.html',
        controller: 'CrearExpedienteController',
        controllerAs: 'ctrl'
      })
      .state('ver_expediente', {
        url: '/ver_expediente/{id}',
        templateUrl: 'app/judicial/expediente/ver_expediente/ver_expediente.html',
        controller: 'VerExpedienteController',
        controllerAs: 'ctrl'
      })
      .state('editar_expediente', {
        url: '/editar_expediente/{id}',
        templateUrl: 'app/judicial/expediente/editar_expediente/editar_expediente.html',
        controller: 'EditarExpedienteController',
        controllerAs: 'ctrl'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
