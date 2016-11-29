(function() {
  'use strict';

  angular
    .module('frontendTelefonia')
    .controller('TelefoniaIngresarExpedienteController', TelefoniaIngresarExpedienteController);

  /** @ngInject */
  function TelefoniaIngresarExpedienteController($log, Telefonia, $state) {
    var vm = this;

    vm.form = [{
      'type': 'fieldset',
      'title': 'INGRESAR EXPEDIENTE',
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

    vm.schema = {
      'type': 'object',
      'title': 'comment',
      'properties': {
        'case_number': {
          'title': 'Número de Expediente',
          'type': 'number'
        },
        'correlative': {
          'title': 'Correlativo',
          'type': 'number'
        },
        'solicitante': {
          'title': 'Solicitante',
          'type': 'string'
        },
        'subject': {
          'title': 'Asunto',
          'type': 'string'
        },
        'observation': {
          'title': 'Observación',
          'type': 'string'
        }
      },
      'required': [
        '*'
      ]
    };

    vm.model = {};

    vm.onSubmit = function() {
      $log.log(vm.model);

      var Expediente = Telefonia.expediente();
      var Providencia = Telefonia.providencia();
      var Dictamen = Telefonia.dictamen();

      var expediente = new Expediente({
        'case_number': vm.model.case_number,
        'entry_date': moment(),
        'correlative': vm.model.correlative,
        'solicitante': vm.model.solicitante,
        'observation': vm.model.observation,
        'subject': vm.model.subject
      });

      expediente.$save(function (exp) {
        var dictamen = new Dictamen({
          'case_number': exp.id,
          'subject': vm.model.subject
        });
        dictamen.$save(function (dict) {
          var providencia = new Providencia({
            'case_number': expediente.id
          });
          providencia.$save();
        });
      });

      $state.go('telefonia_home');

    }
  }
})();
