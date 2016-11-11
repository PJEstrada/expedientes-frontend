(function() {
  'use strict';

  angular
  .module('frontendJudicial')
  .controller('EditarExpedienteController', EditarExpedienteController);

  var main_url = 'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/';

  /** @ngInject */
  function EditarExpedienteController($log, $http, $state, $window, AuthService) {
    var vm = this;

    vm.isLoggedIn = function () {
      if (!AuthService.isLoggedIn()){
        $window.location.href = '/';
        return false;
      }
      return true;
    };

    vm.asesor_id = -1;

    if (AuthService.isLoggedIn()) {
      vm.get = function () {
        $http.get(main_url + 'expediente/' + vm.asesor_id)
          .success(function (data) {
            vm.information = data;
            $log.log(vm.information);
          });
      };
      vm.asesor_id = AuthService.currentUser()['user']['id'];
      vm.get();
    }

    vm.expediente_id = $state.params.id;

    vm.text_content = '';
    vm.tinymce_model_opinion = '';
    vm.tinymce_model_dictamen = '';
    vm.tinymce_model_providencia = '';
    vm.tinymce_options = {
      plugins : 'advlist autolink link image lists charmap print preview',
      skin: 'lightgray',
      theme : 'modern'
    };

    vm.upload_info = function () {
      $http(post_req(main_url + 'crear-opinion/', {
          'asesor': vm.asesor_id,
          'expediente': vm.expediente_id,
          'descripcion': vm.tinymce_model_opinion
        })).then(function (response) {
          $log.log('Crear Opinion: \n' + response['statusText']);

        $http(post_req(main_url + 'crear-dictamen/', {
          'expediente': vm.expediente_id,
          'asesor': vm.asesor_id,
          'descripcion': vm.tinymce_model_dictamen,
          'campo_procuraduria': vm.tinymce_model_dictamen
          })).then(function (response) {
          $http(post_req(main_url + 'emitir-providencia/', {
            'expediente': vm.expediente_id,
            'asunto': 'asuntob',
            'gerencia_destino': 1,
            'descripcion': vm.tinymce_model_providencia
          })).then(function (response) {
            $log.log('Crear Providencia: \n' + response['statusText']);
            $window.location.href = '/';
          });
        });
      })
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


