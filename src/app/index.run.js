(function() {
  'use strict';

  angular
    .module('remixMobile')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
