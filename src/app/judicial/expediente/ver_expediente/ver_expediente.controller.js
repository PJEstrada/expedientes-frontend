(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/';

  /** @ngInject */
  function VerExpedienteController($log, $http, $state) {
    var vm = this;

    vm.expediente_id = $state.params.id;

    $http({
      method: 'GET',
      url: main_url + 'expediente/' + vm.expediente_id + '/'
    }).then(function (response) {
        var data = response['data'];
        if ('numero_instancia' in data){
          vm.id = data['numero_instancia'];
          vm.solicitante = data['solicitante'];
          vm.estado = data['estado'];

          $http({
            method: 'GET',
            url: main_url + '/opinion/' + vm.id
          }).then(function (response) {
            vm.opinion_fecha = response['data']['fecha_emision'];
            vm.opinion = response['data']['descripcion'];
          });

          $http({
            method: 'GET',
            url: main_url + '/providencia/' + vm.id
          }).then(function (response) {
            // TODO providencia
          });

          $http({
            method: 'GET',
            url: main_url + '/dictamen/' + vm.id
          }).then(function (response) {
            // TODO dictamen
            $log.log(response);
          });

        }
      }
    );
  }
})();
