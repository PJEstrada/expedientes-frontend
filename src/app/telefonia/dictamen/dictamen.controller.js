(function() {
  'use strict';

  angular
  .module('frontendTelefonia')
  .controller('TelefoniaDictamenController', CrearDictamenController);

  /** @ngInject */
  function CrearDictamenController($log, $state, $window, AuthService, Telefonia) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/telefonia';
        return false;
      }
      return true;
    };

    var expediente_id = $state.params.id;
    var date = new Date();

    if (AuthService.isLoggedIn()) {
      var Expediente = Telefonia.expediente();
      var Dictamen = Telefonia.dictamenInstance();

      var expediente = Expediente.get({id:expediente_id},function () {
        $log.log(expediente);
        vm.information = expediente;
        vm.id = expediente.case_number;
        date = moment(expediente.entry_date).format('l');
        vm.fecha = date;
        vm.solicitante = expediente.solicitante;
      });
      var dictamen = Dictamen.get({query:{case_number:expediente_id}})


    }

    vm.upload_info = function () {
      $state.go('telefonia_home');

      $log.log('Guardad dictamen');
    };
  }

})();


