(function() {
  'use strict';

  angular
      .module('frontendJudicial')
      .controller('MainController', MainController);

  var main_url = 'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/expedientes-asesor/';

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

