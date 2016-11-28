(function() {
  'use strict';

  angular
      .module('frontendJudicial')
      .controller('MainController', MainController);

  var main_url = 'http://localhost:8000/expedientes-asesor/'//'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/expedientes-asesor/';

  /** @ngInject */
  function MainController($log, $http, $window, AuthService) {
    var vm = this;

    var asesor_id = 1;
    var url = main_url + asesor_id;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/#/login';
        return false;
      }

      return true;
    };

    $http.get(url)
      .success(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++)
        {
          if(data[i].solicitante == 1)
          {
            data[i].solicitante_nombre = "AsesorJuridico "+data[i].solicitante;
          }
        }
        vm.expedientes = data;
      });

    vm.remove_expediente = function (id) {
      $log.log(id);
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
