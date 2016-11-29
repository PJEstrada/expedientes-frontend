(function() {
  'use strict';

  angular
  .module('frontendTelefonia')
  .controller('TelefoniaDictamenController', CrearDictamenController);

  /** @ngInject */
  function CrearDictamenController($state, $window, AuthService, Telefonia) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/';
        return false;
      }
      return true;
    };

    var expediente_id = $state.params.id;
    var date = new Date();

    if (AuthService.isLoggedIn()) {
      vm.asesor_id = AuthService.currentUser()['user']['id'];
      var Dictamen = Telefonia.dictamen();

      vm.information = Dictamen;
      vm.id = Dictamen.numero_instancia;
      date = moment(Dictamen.entry_date);
      vm.fecha = date;
      vm.solicitante = Dictamen.solicitante;
    }

    vm.upload_info = function () {

      var Expediente = Telefonia.expediente({id:expediente_id});
      var expediente = new Expediente({
        'entry_date': date,
        'correlative': vm.model.correlative,
        'solicitante': vm.model.solicitante,
        'observation': vm.model.observation,
        'subject': vm.model.subject
      });
      expediente.$save();
    };
  }

  function post_req(url, d) {
    return {
      method: 'POST',
      url: url,
      data: d
    };
  }
})();


