(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://todobacke-elasticl-195uzltps026i-1470655479.us-west-2.elb.amazonaws.com/expediente/';

  /** @ngInject */
  function VerExpedienteController($log, Request, $state) {
    var vm = this;

    vm.expediente_id = $state.params.id;

    var url = main_url + vm.expediente_id + '/';
    vm.information = get(Request, url);

    $log.log(vm.information);
  }

  function get(Request, url) {
    return Request.get(url)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        console.log(url);
      });
  }
})();
