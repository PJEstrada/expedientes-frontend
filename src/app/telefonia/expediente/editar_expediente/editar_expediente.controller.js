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

    var success = "";

    if (AuthService.isLoggedIn()) {

      vm.expediente = Telefonia.expediente({id: expediente_id});

      vm.id = vm.expediente.case_number;
      vm.correlativo = vm.expediente.correlative;
      vm.solicitante = vm.expediente.solicitante;
      vm.fecha = moment(vm.expediente.entry_date).format('l');
      vm.observacion = vm.expediente.observation;
      vm.asunto = vm.expediente.subject;

    }

    $log.log(vm.expediente);

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

    var num = 123445;

    vm.schema = {
      'type': 'object',
      'title': 'comment',
      'properties': {
        'case_number': {
          'title': 'Número de Expediente',
          'type': 'number',
          'default': num
        },
        'correlative': {
          'title': 'Correlativo',
          'type': 'number',
          'default': parseInt(vm.expediente.id)
        },
        'solicitante': {
          'title': 'Solicitante',
          'type': 'string',
          'default': vm.expediente.solicitante
        },
        'subject': {
          'title': 'Asunto',
          'type': 'string',
          'default': success
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

    vm.model = vm.expediente;

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


