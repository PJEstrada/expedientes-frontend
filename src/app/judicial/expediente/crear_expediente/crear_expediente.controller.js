(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .controller('CrearExpedienteController', CrearExpedienteController);

  /** @ngInject */
  function CrearExpedienteController($http, $log, $window, AuthService) {
    var vm = this;

    vm.file = null;
    vm.form = [{
      'type': 'fieldset',
      'title': 'CREAR EXPEDIENTE',
      'items': [{
        'type': 'tabs',
        'htmlClass': 'options',
        'tabs': [{
          'title': 'PRINCIPAL',
          'items': [{
            'type': 'tabs',
            'htmlClass': 'options',
            'tabs': [{
            'title': 'Información General',
            'items': [{
               'type': 'fieldset',
              'title': 'RED DE TELEFONÍA FIJA',
              'htmlClass': 'row center-xs',
              'items': [{
                'type': 'fieldset',
                'title': 'INFORMACIÓN GENERAL',
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
                'title': 'SERVICIOS DE TELECOMUNICACIONES',
                'htmlClass': 'row center-xs',
                'items': [
                  'servicios_telefonicos',
                  'otros_servicios_telefonicos'
                ]
              }]
            }]
            }//FIN TAB 1 DE TAB 1
            ,{
          'title': 'Red Fija',
          'items': [{
            'type': 'fieldset',
            'title': 'RED DE TELEFONÍA FIJA',
            'htmlClass': 'row center-xs',
            'items': [{
                'type': 'fieldset',
                'title': 'INFORMACIÓN GENERAL',
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
              'title': 'SERVICIOS DE VALOR AGREGADO',
              'htmlClass': 'row center-xs',
              'items': [
                'cantidad_lineas_ISDN_basico',
                'cantidad_accesos_E1',
                'cantidad_lineas_xdsl'
              ]
            },{
              'type': 'fieldset',
              'title': 'TRÁFICO',
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
              'title': 'TARIFAS',
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
              'title': 'EQUIPOS DE CONMUTACIÓN',
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



        }//FIN TAB 2 DE TAB 1
        ,{
          'title': 'Red Movil',
          'items': [{

            'type': 'fieldset',
            'title': 'RED DE TELEFONÍA FIJA',
            'htmlClass': 'row center-xs',
            'items': [{
              'type': 'fieldset',
              'title': 'INFORMACIÓN GENERAL',
              'htmlClass': 'row center-xs',
              'items': [
                'tecnologias_utilizadas',
                'imsi_en_operacion',
                'irm_en_operacion'
              ]
            },{
              'type': 'fieldset',
              'title': 'TRÁFICO',
              'htmlClass': 'row center-xs',
              'items': [
                'trafico_red_movil_a_red_fija',
                'trafico_red_fija_a_red_movil',
                'trafico_generado_propia_red',
                'trafico_generado_redes_nacionales',
                'trafico_internacional_generado_red',
                'trafico_internacional_terminado_red',
                'trafico_promedio_abonado',
                'tiempo_promedio_llamada_saliente',
                'tiempo_promedio_llamada_entrante'
              ]
            },{
              'type': 'fieldset',
              'title': 'TARIFAS MÁXIMAS',
              'description': 'Tarifas máximas al público de telefonía celular móvil, por 1 minuto de conversación, en Quetzales.',
              'htmlClass': 'row center-xs',
              'items': [
                'telefonia_celular_analogica',
                'telefonia_celular_digital',
                'tecnologia_analogica_saliente_plena',
                'tecnologia_analogica_saliente_reducida',
                'tecnologia_digital_saliente_plena',
                'tecnologia_digital_saliente_reducida'
              ]
            },{
              'type': 'fieldset',
              'title': 'EQUIPOS DE CONMUTACIÓN',
              'htmlClass': 'row center-xs',
              'items': [
                'nombre_equipo_conmutacion_2',
                'fabricante_modelo2',
                'cantidad_circuitos_senal_r2_2',
                'cantidad_circuitos_senal_7_2',
                'capacidad_nominal_2',
                'tipo_central_2',
                'codigo_punto_senal_asignado_2',
                'numero_terminales_operacion_2',
                'ubicacion_central_2'
              ]
            }]
          }]
        }//Fin de tab 3 de 1
        ,{
          'title': 'Red Satelital',
          'items': [{
            'type': 'fieldset',
            'title': 'RED DE TELEFONÍA FIJA',
            'htmlClass': 'row center-xs',
            'items': [{
              'type': 'fieldset',
              'title': 'INFORMACIÓN GENERAL',
              'htmlClass': 'row center-xs',
              'items': [
                'sa_cantidad_estaciones',
                'sa_tipo_tecnologia_HUB',
                'sa_ubicacion_HUB',
                'sa_numero_licencia_HUB'
              ]
            },{
              'type': 'fieldset',
              'title': 'SERVICIOS DE VALOR AGREGADO',
              'htmlClass': 'row center-xs',
              'items': [
                'sa_cantidad_enlaces',
                'sa_velocidades_transmisión',
                'sa_canitdad_enlaces_datos'
              ]
            },{
              'type': 'fieldset',
              'title': 'TRÁFICO',
              'htmlClass': 'row center-xs',
              'items': [
                'trafico_red_movil_a_red_fija',
                'trafico_red_fija_a_red_movil',
                'trafico_generado_propia_red',
                'trafico_generado_redes_nacionales',
                'trafico_internacional_generado_red',
                'trafico_internacional_terminado_red',
                'trafico_promedio_abonado',
                'tiempo_promedio_llamada_saliente',
                'tiempo_promedio_llamada_entrante'
              ]
            },{
              'type': 'fieldset',
              'title': 'TARIFAS MÁXIMAS',
              'description': 'Tarifas máximas al público de telefonía celular móvil, por 1 minuto de conversación, en Quetzales.',
              'htmlClass': 'row center-xs',
              'items': [
                'sa_llamada_local_propia_red_normal',
                'sa_llamada_local_propia_red_reducida',
                'sa_llamada_local_otras_red_normal',
                'sa_llamada_local_otras_red_reducida',
                'sa_llamada_interurbana_normal',
                'sa_llamada_interurbana_reducida',
                'sa_cuota_minima_mensual',
                'sa_minutos_cuota_minima_mensual',
                'sa_precio_instalacion_linea_acceso'
              ]
            },{
              'type': 'fieldset',
              'title': 'EQUIPOS DE CONMUTACIÓN',
              'htmlClass': 'row center-xs',
              'items': [
                'nombre_equipo_conmutacion_2',
                'fabricante_modelo2',
                'cantidad_circuitos_senal_r2_2',
                'cantidad_circuitos_senal_7_2',
                'capacidad_nominal_2',
                'tipo_central_2',
                'codigo_punto_senal_asignado_2',
                'numero_terminales_operacion_2',
                'ubicacion_central_2'
              ]
            }]
          }]}
        ]
          }]
        },{
          'title': 'Anexo D Red Fija',
          'items': [{}]

        },{
          'title': 'Anexo E Red Movil',
          'items': [{}]

        },{
          'title': 'Anexo F Via Satelite',
          'items': [{}]
        },{
          'title': 'Anexo I Numeración',
          'items': [{}]
        }
        ]
      }]
    },{
      type: "submit",
      title: "GUARDAR"
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
          'title': 'Fabricante y modelo',
          'type': 'string'
        },
         'fabricante_modelo2': {
          'title': 'Fabricante y modelo',
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
          'title': 'Tecnologias Utilizadas',
          'type': 'array',
          'items': {
            'type': 'string',
            enum: [
              'AMPS',
              'NAMPS',
              'TDMA',
              'CDMA',
              'GSM',
              'Otras'
            ]
          }
        },
        'imsi_en_operacion': {
          'title': 'IMSI en operación (de acuerdo a Recomendación de UIT E.212)',
          'type': 'string'
        },
        'irm_en_operacion': {
          'title': 'IRM en operación (de acuerdo a IFAST)',
          'type': 'string'
        },
        'trafico_red_movil_a_red_fija': {
          'title': 'Tráfico generado de su Red Móvil a Redes Fijas, en minutos',
          'type': 'number'
        },
        'trafico_red_fija_a_red_movil': {
          'title': 'Tráfico generado de su Red Móvil a Redes Móviles, en minutos',
          'type': 'number'
        },
        'trafico_generado_propia_red': {
          'title': 'Tráfico generado y terminado dentro de su propia red, en minutos',
          'type': 'number'
        },
        'trafico_generado_redes_nacionales': {
          'title': 'Total de tráfico generado hacia todas las redes nacionales, en minutos.',
          'type': 'number'
        },
        'trafico_internacional_generado_red': {
          'title': 'Total de tráfico internacional generado en su red (Sin considerar el OPI que lo cursó)',
          'type': 'number'
        },
        'trafico_internacional_terminado_red': {
          'title': 'Total de tráfico internacional terminado en su red (Sin considerar el OPI que lo cursó)',
          'type': 'number'
        },
        'trafico_promedio_abonado': {
          'title': 'Tráfico promedio por abonado (erlangs)',
          'type': 'number'
        },
        'tiempo_promedio_llamada_saliente': {
          'title': 'Tiempo promedio de duración de una llamada saliente (minutos, segundos)',
          'type': 'number'
        },
        'tiempo_promedio_llamada_entrante': {
          'title': 'Tiempo promedio de duración de una llamada entrante (minutos, segundos)',
          'type': 'number'
        },
        'telefonia_celular_analogica': {
          'title': 'Telefonía celular de tecnología analógica',
          'type': 'number'
        },
        'telefonia_celular_digital': {
          'title': 'Telefonía celular de tecnología digital',
          'type': 'number'
        },
        'tecnologia_analogica_saliente_plena': {
          'title': 'Tecnología analógica precio máximo, llamada nacional saliente (tarifa plena)',
          'type': 'number'
        },
        'tecnologia_analogica_saliente_reducida': {
          'title': 'Tecnología analógico precio máximo, llamada nacional saliente (tarifa reducida)',
          'type': 'number'
        },
        'tecnologia_digital_saliente_plena': {
          'title': 'Tecnología digital precio máximo, llamada nacional saliente (tarifa plena)',
          'type': 'number'
        },
        'tecnologia_digital_saliente_reducida': {
          'title': 'Tecnología digital precio máximo, llamada nacional saliente (tarifa reducida)',
          'type': 'number'
        },
        // TODO adjuntar archivo
        'nombre_equipo_conmutacion_2': {
          'title': 'Nombre que identifica al equipo de conmutación',
          'type': 'string'
        },
        'cantidad_circuitos_senal_r2_2': {
          'title': 'Cantidad de circuitos en operación, Señalización R2',
          'type': 'number'
        },
        'cantidad_circuitos_senal_7_2': {
          'title': 'Cantidad de circuitos en operación, Señalización No.7',
          'type': 'number'
        },
        'capacidad_nominal_2': {
          'title': 'Capacidad Nominal (cantidad de líneas)',
          'type': 'number'
        },
        'tipo_central_2': {
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
        'codigo_punto_senal_asignado_2': {
          'title': 'Código de Punto de Señalización Nacional asignado (NSPC)',
          'type': 'number'
        },
        'numero_terminales_operacion_2': {
          'title': 'Número de terminales de señalización, en operación',
          'type': 'number'
        },
        'ubicacion_central_2': {
          'title': 'Ubicación de la central (Depto y Municipio)',
          'type': 'string'
        },
        'sa_cantidad_estaciones': {
          'title': 'Cantidad de estaciones satélitales en servicio',
          'type': 'string'
        },
        'sa_tipo_tecnologia_HUB': {
          'title': 'Tipo de tecnología de transmisión que utiliza el HUB',
          'type': 'string'
        },
        'sa_ubicacion_HUB': {
          'title': 'Ubicación del HUB (Departamento y Municipio)',
          'type': 'string'
        },
         'sa_numero_licencia_HUB': {
          'title': 'Número de Licencia de usuario de facilidades satélitales del HUB',
          'type': 'string'
        },
        'sa_cantidad_enlaces': {
          'title': 'Cantidad de enlaces o líneas de transmisión de datos.',
          'type': 'string'
        },

        'sa_velocidades_transmisión': {
          'title': 'Velocidades de transmisión de datos que se ofrecen, en kbps.',
          'type': 'string'
        },
        'sa_canitdad_enlaces_datos': {
          'title': 'Cantidad de enlaces de datos satélitales para acceso a Internet',
          'type': 'string'
        },
             'sa_llamada_local_propia_red_normal': {
          'title': 'Llamada local, dentro de su propia red, tarifa normal',
          'type': 'number'
        },
        'sa_llamada_local_propia_red_reducida': {
          'title': 'Llamada local, dentro de su propia red, tarifa reducida',
          'type': 'number'
        },
        'sa_llamada_local_otras_red_normal': {
          'title': 'Llamada local, hacia otras redes, tarifa normal',
          'type': 'number'
        },
        'sa_llamada_local_otras_red_reducida': {
          'title': 'Llamada local, hacia otras redes, tarifa reducida',
          'type': 'number'
        },
        'sa_llamada_interurbana_normal': {
          'title': 'Llamada interurbana, tarifa normal',
          'type': 'number'
        },
        'sa_llamada_interurbana_reducida': {
          'title': 'Llamada interurbana, tarifa reducida',
          'type': 'number'
        },
        'sa_cuota_minima_mensual': {
          'title': 'Cuota básica mínima mensual',
          'type': 'number'
        },
        'sa_minutos_cuota_minima_mensual': {
          'title': 'Minutos que incluye la cuota básica mensual',
          'type': 'number'
        },
        'sa_precio_instalacion_linea_acceso': {
          'title': 'Precio de instalación de una línea de acceso',
          'type': 'number'
        }

        // TODO archivo adicional
        // TODO diagrama esquematico
        // TODO adjuntar plot cobertura
      },
      'required': [
        '*'
      ]
    };

    vm.model = {};

    vm.onSubmit = function() {
      // First we broadcast an event so all fields validate themselves
      //vm.$broadcast('schemaFormValidate');

      $log.log(vm.model);

      var post_data = {
        'numero': Math.random() * 100 + 1 | 0,
        'key': 'aaaaa' + Math.random() * 10000 + 1,
        'estado': 1,
        'solicitante': AuthService.currentUser()['user']['id'],
        'documentos': {
          'nombre': vm.file['name'],
          'archivo': vm.file
        }
      };

      var req = {
        method: 'POST',
        url: 'http://todobacke-elasticl-m0svpuaw5e4x-1938449628.us-west-2.elb.amazonaws.com/crear-expediente/',
        data: post_data
      };

      $http(req)
        .then(function (response) {
          if (response['status'] == 201){
            $window.location.href = '/';
          }
        }, function (response) {
          // TODO handle error
          $log.log(response);
        });
    }
}
//var formidable = require("formidable");
})();
