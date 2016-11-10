(function() {
  'use strict';

  angular
      .module('frontendJudicial')
      .controller('MainController', MainController);

  var main_url = 'http://todobacke-elasticl-le2gx6ueslwo-2118698052.us-west-2.elb.amazonaws.com/expedientes-asesor/';

  /** @ngInject */
  function MainController($log, $http) {
    var vm = this;

    var asesor_id = 1;
    var url = main_url + asesor_id + '/';

    vm.expedientes = get($http, url);

    vm.expedientes = [
      {id: 1, name: 'Name 1', user: 'User 1', date:'20/30/20'},
      {id: 2, name: 'Name 2', user: 'User 2', date:'30/30/20'},
      {id: 3, name: 'Name 3', user: 'User 3', date:'40/30/20'},
      {id: 4, name: 'Name 4', user: 'User 4', date:'50/30/20'}
    ];

    vm.remove_expediente = function (id) {
      $log.log(id);
    }
  }

  function get($http, url) {
    $http.jsonp(url)
      .success(function (data) {
        return data;
      });
  }

})();

