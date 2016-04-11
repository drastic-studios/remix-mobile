(function() {
  'use strict';

  angular
      .module('remixMobile')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Drums',
        'logo': 'eq-icon.png'
      },
      {
        'title': 'Melody',
        'logo': 'melody-icon.png'
      },
      {
        'title': 'Bass',
        'logo': 'bass-icon.png'
      },
      {
        'title': 'Percussion',
        'logo': 'effects-icon.png'
      },
      {
        'title': 'Vocal',
        'logo': 'vocal-icon.png'
      },
      {
        'title': 'SFX',
        'logo': 'random-icon.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
