(function() {
  'use strict';

  angular
  .module('frontendTelefonia')
  .controller('TelefoniaEditarExpedienteController', TelefoniaEditarExpedienteController);

  /** @ngInject */
  function TelefoniaEditarExpedienteController($log, $state, $window, AuthService, Telefonia) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/telefonia';
        return false;
      }
      return true;
    };

    var expediente_id = $state.params.id;

    var expediente;

    if (AuthService.isLoggedIn()) {

      var Expediente = Telefonia.expediente({id:expediente_id});
      expediente = Expediente.get({id:expediente_id}, function () {
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
              'default': parseInt(vm.case_number)
            },
            'correlative': {
              'title': 'Correlativo',
              'type': 'number',
              'default': parseInt(vm.correlativo)
            },
            'solicitante': {
              'title': 'Solicitante',
              'type': 'string',
              'default': 'solicito'
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

    vm.form = [{
      'type': 'fieldset',
      'title': 'EDITAR EXPEDIENTE',
      'items': [{
        'type': 'fieldset',
        'htmlClass': 'options',
        'items': [
          'case_number',
          'correlative',
          'solicitante',
          'subject',
          'observation'
        ]}
      ]},{
      type: "submit",
      htmlClass: "button-save",
      title: "GUARDAR"
    }];

    vm.model = {};

    vm.onSubmit = function() {
      $log.log(vm.model);

      expediente.case_number = vm.model.case_number;
      expediente.correlative = vm.model.correlative;
      expediente.solicitante = vm.model.solicitante;
      expediente.observation = vm.model.observation;
      expediente.subject = vm.model.subject;

      expediente.$update();
      $state.go('telefonia_home');
    };
  }
})();


