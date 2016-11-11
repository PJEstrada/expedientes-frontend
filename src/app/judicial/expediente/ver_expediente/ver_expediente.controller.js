(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/expediente/';

  /** @ngInject */
  function VerExpedienteController($log, $http, $state) {
    var vm = this;

    vm.expediente_id = $state.params.id;

    var url = main_url + vm.expediente_id + '/';

    vm.get = function (url) {
      $http.get(url)
        .success(function (data) {
          $log.log(data);
          vm.information = data;
        });
    };

    vm.get(url);
  }
})();
