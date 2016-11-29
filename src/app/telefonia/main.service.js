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
    var findOne = 'findOne/';

    service.expediente = function () {
      return $resource(baseURL + expediente + ':id', {id:'@id'},
        {
          'update': {
            method: 'PUT'
          }
        })
    };

    service.acta = function () {
      return $resource(baseURL + acta + ':id', {id:'@id'})
    };

    service.dictamen = function () {
      return $resource(baseURL + dictamen + ':id', {id:'@id'})
    };

    service.dictamenInstance = function () {
      return $resource(baseURL + dictamen + findOne, {where:'@query'});
    };

    service.providencia = function () {
      return $resource(baseURL + providencia + ':id', {id:'@id'})
    };

    service.providenciaInstance = function () {
      return $resource(baseURL + providencia + findOne, {where:'@query'});
    };

    return service;

  }

})();
