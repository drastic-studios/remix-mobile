(function() {
  'use strict';

  angular
    .module('remixMobile')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .when('/', {
        templateUrl: 'app/main/intro-page.html',
        controller: 'MainController'
      })

      .when('/outro', {
        templateUrl: 'app/main/outro-page.html',
        controller: 'MainController'
      })


      .otherwise({
        redirectTo: '/'
      });
  }
})();
