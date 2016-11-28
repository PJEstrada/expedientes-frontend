(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://localhost:8000/'//'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/';

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
          vm.solicitante_nombre = "AsesorJuridico "+data['solicitante'];
          vm.estado = data['estado'];

          $http({
            method: 'GET',
            url: main_url + 'opinion/' + vm.id
          }).then(function (response) {
            vm.opinion_fecha = response['data']['fecha_emision'];
            vm.opinion_fecha = moment(vm.opinion_fecha).format("DD/MM/YYYY");
            vm.opinion = response['data']['descripcion'];
          });

          $http({
            method: 'GET',
            url: main_url + 'providencia/' + vm.id
          }).then(function (response) {
            vm.providencia_fecha = response['data']['fecha_emision'];
            vm.providencia_fecha = moment(vm.providencia_fecha).format("DD/MM/YYYY");
            vm.providencia = response['data']['descripcion'];
          });

          $http({
            method: 'GET',
            url: main_url + 'dictamen/' + vm.id
          }).then(function (response) {
            vm.dictamen_fecha = response['data']['fecha_emision'];
            vm.dictamen_fecha = moment(vm.dictamen_fecha).format("DD/MM/YYYY");
            vm.dictamen = response['data']['descripcion'];
          });

        }
      }
    );
  }
})();
