(function() {
  'use strict';

  angular
  .module('frontendJudicial')
  .controller('VerExpedienteController', VerExpedienteController);

  /** @ngInject */
  function VerExpedienteController(Request, $state) {
    var vm = this;
    var id = $state.params.id;
    console.log(id);

  }
})();


