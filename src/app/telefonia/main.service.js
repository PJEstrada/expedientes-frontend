/**
 * Created by oscar on 25/11/2016.
 */

(function () {
  'use strict';

  angular.module('frontendTelefonia')
    .factory('Telefonia', telefoniaService);

  function telefoniaService($resource) {

    moment.locale();

    var service = {};

    var baseURL = 'http://ec2-35-162-214-216.us-west-2.compute.amazonaws.com:3000/api/';
    var expediente = 'expedients/';
    var acta = 'acts/';
    var dictamen = 'dicta/';
    var providencia = 'providences/';

    service.expediente = function (id) {
      return $resource(baseURL + expediente + ':id', {id:'@id'})
    };

    service.acta = function (id) {
      return $resource(baseURL + acta + ':id', {id:'@id'})
    };

    service.dictamen = function (id) {
      return $resource(baseURL + dictamen + ':id', {id:'@id'})
    };

    service.providencia = function (id) {
      return $resource(baseURL + providencia + ':id', {id:'@id'})
    };

    return service;

  }

})();
