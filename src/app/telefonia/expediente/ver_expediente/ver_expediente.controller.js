(function() {
  'use strict';

  angular
    .module('frontendTelefonia')
    .controller('TelefoniaVerExpedienteController', TelefoniaVerExpedienteController);

  /** @ngInject */
  function TelefoniaVerExpedienteController($state, Telefonia) {
    var vm = this;

    var expediente_id = $state.params.id;

    var Expediente = Telefonia.expediente();
    var expediente = Expediente.get({id: expediente_id}, function () {
      vm.id = expediente.case_number;
      vm.solicitante = expediente.solicitante;
      vm.fecha = moment(expediente.entry_date).format('l');
      vm.observacion = expediente.observation;
      vm.asunto = expediente.subject;

      var Dictamen = Telefonia.dictamenInstance();
      var dictamen = Dictamen.get(
        {
          query: {case_number: expediente_id}
        },
        function () {
          vm.dictamen = {
            subject: dictamen.subject,
            reference_ant: dictamen.reference_ant,
            documental_ant: dictamen.documental_ant,
            technical_consideration: dictamen.technical_consideration,
            technical_dictum: dictamen.technical_dictum
          }
        });

      var Providencia = Telefonia.providenciaInstance();
      var providencia = Providencia.get(
        {
          query: {case_number: expediente_id}
        },
        function () {
          vm.providencia = {
            document: providencia.document
          }
        });
    });
  }
})();
