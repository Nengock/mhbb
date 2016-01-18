(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('api', api);

  function api($http, $ionicLoading, $ionicPopup, configuration) {
    var api;
    api = {
      request: request
    };
    return api;

    function request(method, url, data) {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
      });
      var httpConfig = {
        method: method.toUpperCase(),
        url: [configuration.apiBase, url].join("/")
      };

      httpConfig[httpConfig.method === 'GET' ? 'params' : 'data'] = data;
      return $http(httpConfig)
        .then(function(response) {
          return response.data.data;
        })
        .catch(function(error) {
          $ionicPopup.alert({
            title: 'Matata ...',
            template: error.data.message
          });
        })
        .finally(function() {
          $ionicLoading.hide();
        });
    }
  }

})();
