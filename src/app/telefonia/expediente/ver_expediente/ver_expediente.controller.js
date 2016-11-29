(function() {
  'use strict';

  angular
    .module('frontendTelefonia')
    .controller('TelefoniaVerExpedienteController', TelefoniaVerExpedienteController);

  /** @ngInject */
  function TelefoniaVerExpedienteController($log, $state, Telefonia) {
    var vm = this;

    var expediente_id = $state.params.id;

    var expediente = Telefonia.expediente({id: expediente_id});

    vm.id = expediente.case_number;
    vm.solicitante = expediente.solicitante;
    vm.fecha = moment(expediente.entry_date).format('l');
    vm.observacion = expediente.observation;
    vm.asunto = expediente.subject;

    var Dictamen = Telefonia.dictamen().query(function () {
      var dictamen = Dictamen[0];
      vm.dictamen = {
        subject: dictamen.subject,
        reference_ant: dictamen.reference_ant,
        documental_ant: dictamen.documental_ant,
        technical_consideration: dictamen.technical_consideration,
        technical_dictum: dictamen.technical_dictum
      }
    });

    var Providencia = Telefonia.providencia().query(function () {
      var providencia = Providencia[0];
      vm.providencia = {
        document: providencia.document
      }
    });
  }
})();
