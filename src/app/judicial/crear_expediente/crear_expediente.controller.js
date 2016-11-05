(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('TabController', TabController);

  /** @ngInject */
  function TabController() {
    var vm = this;

    vm.form = [{
      'type': 'fieldset',
      'title': 'CREAR EXPEDIENTE',
      'items': [{
        'type': 'tabs',
        'htmlClass': 'options',
        'tabs': [{
          'title': 'Uno',
          'items': [{
              'type': 'fieldset',
              'title': 'Crear Expediente',
              'htmlClass': 'row center-xs',
              'items': [{
                'type': 'fieldset',
                'title': 'Información General',
                'htmlClass': 'row center-xs',
                'items': [
                  'nombre_operador',
                  'numero_inscripcion',
                  'nombre_representante',
                  'telefono',
                  'fax',
                  'email'
                ]
              },{
                'type': 'fieldset',
                'title': 'Servicios de Telecomunicaciones',
                'htmlClass': 'row center-xs',
                'items': [
                  'servicios_telefonicos',
                  'otros_servicios_telefonicos'
                ]
              }]
          }]
        },{
          'title': 'Dos',
          'items': [{
            'type': 'fieldset',
            'title': 'RED DE TELEFONÍA FIJA',
            'htmlClass': 'row center-xs',
            'items': [{
                'type': 'fieldset',
                'title': 'Información General',
                'htmlClass': 'row center-xs',
                'items': [
                  'cantidad_centrales_locales_conmutacion',
                  'cantidad_interurbanas_locales_conmutacion',
                  'porcentaje_lineas_centrales_tecnologia',
                  'porcentaje_lineas_areas_urbanas',
                  'porcentaje_lineas_rurales'
                ]
            },{
              'type': 'fieldset',
              'title': 'Servicios de valor agregado',
              'htmlClass': 'row center-xs',
              'items': [
                'cantidad_lineas_ISDN_basico',
                'cantidad_accesos_E1',
                'cantidad_lineas_xdsl'
              ]
            },{
              'type': 'fieldset',
              'title': 'Servicios de valor agregado',
              'htmlClass': 'row center-xs',
              'items': [
                'trafico_red_movil_minutos',
                'trafico_red_red_fija',
                'trafico_propia_red',
                'trafico_todas_redes',
                'trafico_internacional_generado_su_red',
                'trafico_internacial_terminado_su_red',
                'trafico_por_abonado_metropolitana',
                'trafico_por_abonado_departamental',
                'tiempo_duracion_llamada_saliente',
                'tiempo_duracion_llamada_entrante'
              ]
            },{
              'type': 'fieldset',
              'title': 'Tarifas',
              'description': 'Se debe indicar el precio por 1 minuto de conversación, expresado en Quetzales',
              'htmlClass': 'row center-xs',
              'items': [
                'llamada_local_propia_red_normal',
                'llamada_local_propia_red_reducida',
                'llamada_local_otras_red_normal',
                'llamada_local_otras_red_reducida',
                'llamada_interurbana_normal',
                'llamada_interurbana_reducida',
                'cuota_minima_mensual',
                'minutos_cuota_minima_mensual',
                'precio_instalacion_linea_acceso'
              ]
            },{
              'type': 'fieldset',
              'title': 'Equipos de Conmutación',
              'htmlClass': 'row center-xs',
              'items': [
                'nombre_equipo_conmutacion',
                'fabricante_modelo',
                'cantidad_circuitos_senal_r2',
                'cantidad_circuitos_senal_7',
                'capacidad_nominal',
                'tipo_central',
                'codigo_punto_senal_asignado',
                'numero_terminales_operacion',
                'numero_enlaces_operacion',
                'funcionalidad_nspc',
                'ubicacion_central'
              ]
            }]
          }]
        }]
      }]
    },{
      type: "submit",
      title: "Siguiente"
    }];

    vm.schema = {
      'type': 'object',
      'title': 'comment',
      'properties': {
        // TAB 1
        'nombre_operador': {
          'title': 'Nombre del operador de Red Local',
          'type': 'string'
        },
        'numero_inscripcion': {
          'title': 'Número de inscripción como Operador de Red Local',
          'type': 'string'
        },
        'nombre_representante': {
          'title': 'Nombre del Representante Legal',
          'type': 'string'
        },
        'telefono': {
          'title': 'Teléfono',
          'type': 'number'
        },
        'fax': {
          'title': 'FAX',
          'type': 'number'
        },
        'email': {
          'title': 'Correo electrónico',
          'type': 'string',
          'pattern': "^\\S+@\\S|$"
        },
        'servicios_telefonicos': {
          'title': 'Marque los servicios telefónicos que ofrece o ingrese otros',
          'type': 'array',
          'items': {
            'type': 'string',
            enum: [
              'Telefonía Fija',
              'Telefonía Móvil',
              'Telefonía vía satélite'
            ]
          }
        },
        'otros_servicios_telefonicos': {
          'title': 'Otros',
          'type': 'string'
        },
        // TAB 2
        'cantidad_centrales_locales_conmutacion': {
          'title': 'Cantidad de centrales locales de conmutación',
          'type': 'number'
        },
        'cantidad_interurbanas_locales_conmutacion': {
          'title': 'Cantidad de interurbanas locales de conmutación',
          'type': 'number'
        },
        'porcentaje_lineas_centrales_tecnologia': {
          'title': 'Porcentaje de líneas en operación conectadas a centrales de tecnología digital',
          'type': 'string'
        },
        'porcentaje_lineas_areas_urbanas': {
          'title': 'Porcentaje de líneas instaladas en áreas urbanas',
          'type': 'string'
        },
        'porcentaje_lineas_rurales': {
          'title': 'Porcentaje de líneas instaladas en áreas rurales o suburbanas',
          'type': 'string'
        },
        'cantidad_lineas_ISDN_basico': {
          'title': 'Cantidad de líneas o accesos ISDN básicos',
          'type': 'number'
        },
        'cantidad_accesos_E1': {
          'title': 'Cantidad y capacidad de accesos E1, ISDN Primarios (PRI)',
          'type': 'number'
        },
        'cantidad_lineas_xdsl': {
          'title': 'Cantidad de líneas o accesos xDSL',
          'type': 'number'
        },
        'trafico_red_movil_minutos': {
          'title': 'Tráfico generado de su Red Fija a Redes Fijas, en minutos',
          'type': 'number'
        },
        'trafico_red_red_fija': {
          'title': 'Tráfico generado de su Red Fija a Redes Fijas, en minutos',
          'type': 'number'
        },
        'trafico_propia_red': {
          'title': 'Tráfico generado y terminado dentro de su propia red, en minutos',
          'type': 'number'
        },
        'trafico_todas_redes': {
          'title': 'Total de tráfico generado hacia todas las redes nacionales, incluyendo la propia, en minutos',
          'type': 'number'
        },
        'trafico_internacional_generado_su_red': {
          'title': 'Total de tráfico internacional generado en su red (Sin considerar el OPI que lo cursó)',
          'type': 'number'
        },
        'trafico_internacial_terminado_su_red': {
          'title': 'Total de tráfico internacional terminado en su red (Sin considerar el OPI que lo cursó)',
          'type': 'number'
        },
        'trafico_por_abonado_metropolitana': {
          'title': 'Tráfico promedio por abonado (erlangs) Area Metropolitana',
          'type': 'number'
        },
        'trafico_por_abonado_departamental': {
          'title': 'Tráfico promedio por abonado (erlangs) Area Departamental',
          'type': 'number'
        },
        'tiempo_duracion_llamada_saliente': {
          'title': 'Tiempo promedio de duración de una llamada saliente',
          'type': 'number'
        },
        'tiempo_duracion_llamada_entrante': {
          'title': 'Tiempo promedio de duración de una llamada entrante',
          'type': 'number'
        },
        'llamada_local_propia_red_normal': {
          'title': 'Llamada local, dentro de su propia red, tarifa normal',
          'type': 'number'
        },
        'llamada_local_propia_red_reducida': {
          'title': 'Llamada local, dentro de su propia red, tarifa reducida',
          'type': 'number'
        },
        'llamada_local_otras_red_normal': {
          'title': 'Llamada local, hacia otras redes, tarifa normal',
          'type': 'number'
        },
        'llamada_local_otras_red_reducida': {
          'title': 'Llamada local, hacia otras redes, tarifa reducida',
          'type': 'number'
        },
        'llamada_interurbana_normal': {
          'title': 'Llamada interurbana, tarifa normal',
          'type': 'number'
        },
        'llamada_interurbana_reducida': {
          'title': 'Llamada interurbana, tarifa reducida',
          'type': 'number'
        },
        'cuota_minima_mensual': {
          'title': 'Cuota básica mínima mensual',
          'type': 'number'
        },
        'minutos_cuota_minima_mensual': {
          'title': 'Minutos que incluye la cuota básica mensual',
          'type': 'number'
        },
        'precio_instalacion_linea_acceso': {
          'title': 'Precio de instalación de una línea de acceso',
          'type': 'number'
        },
        // TODO falta adjuntar archivo
        'nombre_equipo_conmutacion': {
          'title': 'Nombre que identifica al equipo de conmutacion',
          'type': 'string'
        },
        'fabricante_modelo': {
          'title': 'Fabriccante y modelo',
          'type': 'string'
        },
        'cantidad_circuitos_senal_r2': {
          'title': 'Cantidad de circuitos en operación, Señalización R2',
          'type': 'number'
        },
        'cantidad_circuitos_senal_7': {
          'title': 'Cantidad de circuitos en operación, Señalización No.7',
          'type': 'number'
        },
        'capacidad_nominal': {
          'title': 'Capacidad Nominal (cantidad de líneas)',
          'type': 'number'
        },
        'tipo_central': {
          'title': 'Tipo de central',
          'type': 'array',
          'items': {
            'type': 'string',
            enum: [
              'Local',
              'Tránsito',
              'Combinada',
              'Internacional'
            ]
          }
        },
        'codigo_punto_senal_asignado': {
          'title': 'Código de Punto de Señalización Nacional asignado (NSPC)',
          'type': 'number'
        },
        'numero_terminales_operacion': {
          'title': 'Número de terminales de señalización, en operación',
          'type': 'number'
        },
        'numero_enlaces_operacion': {
          'title': 'Número de enlaces de señalización, en operación',
          'type': 'number'
        },
        'funcionalidad_nspc': {
          'title': 'Funcionalidad del NSPC',
          'type': 'array',
          'items': {
            'type': 'string',
            enum: [
              'STP',
              'SP'
            ]
          }
        },
        'ubicacion_central': {
          'title': 'Ubicación de la central (Depto y Municipio)',
          'type': 'string'
        },
        // TODO archivo adicional
        // TODO diagrama esquematico
        // TAB 3
        'tecnologias_utilizadas': {
          'title': ''
        }
      },
      'required': [
        '*'
      ]
    };

    vm.model = {};

    vm.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      //vm.$broadcast('schemaFormValidate');

      console.log(vm.model);
    }
}
var formidable = require("formidable");

})();
