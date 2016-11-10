(function() {
  'use strict';

  angular
  .module('frontendJudicial')
  .controller('EditarExpedienteController', EditarExpedienteController);

  var main_url = 'http://todobacke-elasticl-le2gx6ueslwo-2118698052.us-west-2.elb.amazonaws.com';

  /** @ngInject */
  function EditarExpedienteController($log, $http, $state) {
    var vm = this;

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

    $http.post(url, {
      'asesor': 1,
      'descripcion': vm.tinymce_model_opinion
    })
      .then(
        $http.post(url, {
          'expediente': vm.expediente_id,
          'descripcion': vm.tinymce_model_dictamen,
          'campo_procuraduria': vm.tinymce_model_dictamen
        }).then(
          $http.post(url, {
            'expediente': vm.expediente_id,
            'asunto': 'asuntob',
            'descripcion': vm.tinymce_model_providencia
          }).success(function (data) {
            $log.log(data);
          })
        )
      );

    vm.information = get($http, url);

    $log.log(vm.information);
  }

  function get($http, url) {
    $http.jsonp(url)
      .success(function (data) {
        return data;
      });
}})();


