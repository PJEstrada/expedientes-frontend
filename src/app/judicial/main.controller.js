(function() {
  'use strict';

  angular
      .module('frontendJudicial')
      .controller('MainController', MainController);

  var main_url = 'http://todobacke-elasticl-195uzltps026i-1470655479.us-west-2.elb.amazonaws.com/expedientes-asesor/';

  /** @ngInject */
  function MainController(Request) {
    var vm = this;

    var asesor_id = 1;
    var url = main_url + asesor_id + '/';

    // vm.expedientes = get(Request, url);

    vm.expedientes = [
      {id: 1, name: 'Name 1', user: 'User 1', date:'20/30/20'},
      {id: 2, name: 'Name 2', user: 'User 2', date:'30/30/20'},
      {id: 3, name: 'Name 3', user: 'User 3', date:'40/30/20'},
      {id: 4, name: 'Name 4', user: 'User 4', date:'50/30/20'}
    ];

    vm.remove_expediente = function (id) {
      console.log(id);
    }
  }

  function get(Request, url) {
    return Request.get(url)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        console.log(url);
        console.log(err);
        console.log(res);
      });
  }

  function post(Request, url, data) {
    return Request.post(url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(data)
      .end();
  }

})();

