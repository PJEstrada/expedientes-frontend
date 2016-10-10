(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
