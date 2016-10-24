(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('TabController', TabController);

  /** @ngInject */
  function TabController() {
    var vm = this;
    vm.title = 'Crear Expediente';
    vm.tabs = [{
      title: 'One',
      url: 'one.tpl.html',
      data: [{
        name: 'INFORMACIÓN GENERAL',
        class_general_name: '',
        class_elements_name: '',
        elements:[
          'Nombre del operador de Red Local ',
          'Numero de inscripcion como Operador de Red Local ',
          'Nombre del Representante Legal ',
          'Telefono: ',
          'Fax ',
          'Correo '
        ]
      }, {
        name: 'SERVICIOS DE TELECOMUNICACIONES',
        description: 'Marque los servicios telefónicos que ofrece o ingrese Otros ',
        class_general_name: '',
        class_elements_name: '',
        elements: [
          'Telefonía Fija',
          'Telefonía Móvil',
          'Telefonía Vía Satélite'
        ]
      }],
      button_title: 'Siguiente'

    }, {
      title: 'Two',
        url: 'two.tpl.html'
    }, {
      title: 'Three',
        url: 'three.tpl.html'
    }];

    vm.processIndividual = function processFormFieldsIndividual(req, res) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        var fields = [];

        var form = new formidable.IncomingForm();
        form.on('field', function (field, value) {
          console.log(field);
          console.log(value);
          fields[field] = value;
        });
    };

  vm.current_tab = 'one.tpl.html';
  vm.current_tab_info = vm.tabs[0];

  vm.onClickTab = function (tab) {
    vm.current_tab = tab['url'];
    vm.current_tab_info = tab;
    console.log(vm.current_tab_info);
  };
  vm.isActiveTab = function (tabUrl) {
    return tabUrl == vm.current_tab;
  }
}

/**
 * Created by boris on 24/10/16.
 */
var formidable = require("formidable");

})();
