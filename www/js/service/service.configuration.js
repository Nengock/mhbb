(function() {

  'use strict';

  angular.module('mhbb.services')
    .factory('configuration', configuration);

  function configuration() {
    var apiBase = 'http://localhost:8088';
    return {
      apiBase: apiBase
    }
  }

})();