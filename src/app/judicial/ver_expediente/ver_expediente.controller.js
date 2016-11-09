(function() {
  'use strict';

  angular
  .module('frontendJudicial')
  .controller('VerExpedienteController', VerExpedienteController);

  var main_url = 'http://todobacke-elasticl-195uzltps026i-1470655479.us-west-2.elb.amazonaws.com/expedientes-asesor/';

  /** @ngInject */
  function VerExpedienteController(Request, $state) {
    var vm = this;

    vm.expediente_id = $state.params.id;

    vm.tinymceModel = '';
    vm.tinymceOptions = {
      plugins : 'advlist autolink link image lists charmap print preview',
      skin: 'lightgray',
      theme : 'modern'
    };

    var url = main_url + 'expediente/' + vm.expediente_id;
    vm.information = get(Request, url);

    console.log(vm.information);
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


