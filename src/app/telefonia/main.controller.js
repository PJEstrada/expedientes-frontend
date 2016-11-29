(function() {
  'use strict';

  angular
      .module('frontendTelefonia')
      .controller('TelefoniaMainController', TelefoniaMainController);

  /** @ngInject */
  function TelefoniaMainController($log, $window, AuthService, Telefonia) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/#/login';
        return false;
      }

      return true;
    };

    var Expediente = Telefonia.expediente();

    var expedientes = Expediente.query(function () {

      expedientes.forEach(function (exp) {
        exp.entry_date = moment(exp.entry_date).format('l');
      });
      vm.expedientes = expedientes;
    });

    vm.remove_expediente = function (id) {
      var expediente = Telefonia.expediente({id:id});
      expediente.remove();
    }
  }

  function get($http, url) {
    $http.jsonp(url)
      .success(function (data) {
        console.log(data);
        return data;
      });
  }

})();

