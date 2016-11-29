(function() {
  'use strict';

  angular
      .module('frontendTelefonia')
      .controller('TelefoniaMainController', TelefoniaMainController);

  /** @ngInject */
  function TelefoniaMainController($scope, $log, $window, AuthService, Telefonia) {
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
      $log.log(vm.expedientes);
    });

    vm.remove_expediente = function (exp, index) {
      exp.$remove(function () {
        var dictamen = Telefonia.dictamen();
        dictamen.query({id:exp.id}, function () {
          dictamen[0].$remove(function () {
            var providencia = Telefonia.providencia();
            providencia.query({id:exp.id}, function () {
              providencia.$remove();
            });
          });
        });
      });
      vm.expedientes.splice(index, 1);
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

