(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
