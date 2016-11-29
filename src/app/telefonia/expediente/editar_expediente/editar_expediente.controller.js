(function() {
  'use strict';

  angular
  .module('frontendTelefonia')
  .controller('TelefoniaEditarExpedienteController', TelefoniaEditarExpedienteController);

  /** @ngInject */
  function TelefoniaEditarExpedienteController($log, $http, $state, $window, AuthService, Telefonia, $scope) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/telefonia';
        return false;
      }
      return true;
    };

    var expediente_id = $state.params.id;

    if (AuthService.isLoggedIn()) {

      var Expediente = Telefonia.expediente();
      var expediente = Expediente.get({id:expediente_id}, function () {
        vm.case_number = expediente.case_number;
        vm.correlativo = expediente.correlative;
        vm.solicitante = expediente.solicitante;
        vm.fecha = moment(expediente.entry_date).format('l');
        vm.observacion = expediente.observation;
        vm.asunto = expediente.subject;
        $log.log(expediente);

        vm.schema = {
          'type': 'object',
          'title': 'comment',
          'properties': {
            'case_number': {
              'title': 'Número de Expediente',
              'type': 'number',
              'default': vm.case_number
            },
            'correlative': {
              'title': 'Correlativo',
              'type': 'number',
              'default': vm.correlativo
            },
            'solicitante': {
              'title': 'Solicitante',
              'type': 'string',
              'default': vm.solicitante
            },
            'subject': {
              'title': 'Asunto',
              'type': 'string',
              'default': vm.asunto
            },
            'observation': {
              'title': 'Observación',
              'type': 'string',
              'default': vm.observacion
            }
          },
          'required': [
            '*'
          ]
        };

      });

    }



    vm.onSubmit = function() {
      $log.log(vm.model);

      var Expediente = Telefonia.expediente();
      var expediente = new Expediente({
        'case_number': vm.model.case_number,
        'entry_date': moment(),
        'correlative': vm.model.correlative,
        'solicitante': vm.model.solicitante,
        'observation': vm.model.observation,
        'subject': vm.model.subject
      });
      expediente.$save();
    };

  }
})();


