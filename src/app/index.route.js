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
      })

      // Telefonia
      .state('telefonia_home', {
        url: '/telefonia',
        templateUrl: 'app/telefonia/main.html',
        controller: 'TelefoniaMainController',
        controllerAs: 'ctrl'
      })
      .state('telefonia_ingreso_expediente', {
        url: '/telefonia_ingreso_expediente',
        templateUrl: 'app/telefonia/expediente/ingresar_expediente/ingresar_expediente.html',
        controller: 'TelefoniaIngresarExpedienteController',
        controllerAs: 'ctrl'
      })
      .state('telefonia_ver_expediente', {
        url: '/telefonia_ver_expediente/{id}',
        templateUrl: 'app/telefonia/expediente/ver_expediente/ver_expediente.html',
        controller: 'TelefoniaVerExpedienteController',
        controllerAs: 'ctrl'
      })
      .state('telefonia_editar_expediente', {
        url: '/telefonia_editar_expediente/{id}',
        templateUrl: 'app/telefonia/expediente/editar_expediente/editar_expediente.html',
        controller: 'TelefoniaEditarExpedienteController',
        controllerAs: 'ctrl'
      })
      .state('telefonia_dictamen', {
        url: '/telefonia_dictamen/{id}',
        templateUrl: 'app/telefonia/dictamen/dictamen.html',
        controller: 'TelefoniaDictamenController',
        controllerAs: 'ctrl'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
