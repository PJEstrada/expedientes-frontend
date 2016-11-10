(function() {
  'use strict';

  angular
  .module('frontendJudicial')
  .controller('EditarExpedienteController', EditarExpedienteController);

  var main_url = 'http://todobacke-elasticl-195uzltps026i-1470655479.us-west-2.elb.amazonaws.com';

  /** @ngInject */
  function EditarExpedienteController($log, Request, $state) {
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

    vm.upload_info = function () {
      Request.post(main_url + '/crear-opinion/')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
          'asesor': 1,
          'descripcion': vm.tinymce_model_opinion
        })
        .end(function (err, res) {
          Request.post(main_url + '/crear-dictamen/')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
              'expediente': vm.expediente_id,
              'descripcion': vm.tinymce_model_dictamen,
              'campo_procuraduria': vm.tinymce_model_dictamen
            })
            .end(function (err, res) {
              Request.post(main_url + '/emitir-providencia/')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send({
                  'expediente': vm.expediente_id,
                  'asunto': 'asuntob',
                  'descripcion': vm.tinymce_model_providencia
                })
                .end(function (err, res) {
                  $log.log('200. OK');
                });
            });
        });
    };

    vm.information = get(Request, url);

    $log.log(vm.information);
  }

  function get(Request, url) {
    return Request.get(url)
      .set('Accept', 'application/json')
      .end(function (err, res) {

      });
  }

  function post(Request, url, data) {
    return Request.post(url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(data)
      .end(function (err, res) {

      });
  }
})();


