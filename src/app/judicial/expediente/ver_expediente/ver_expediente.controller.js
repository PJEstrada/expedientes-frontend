(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://todobacke-elasticl-le2gx6ueslwo-2118698052.us-west-2.elb.amazonaws.com/expediente/';

  /** @ngInject */
  function VerExpedienteController($log, $http, $state) {
    var vm = this;

    vm.expediente_id = $state.params.id;

    var url = main_url + vm.expediente_id + '/';
    vm.information = get($http, url);

  }

  function get($http, url) {
    $http.jsonp(url)
      .success(function (data) {
        return data;
      });
  }
})();
