(function() {

  'use strict';

  angular.module('mhbb.services')
    .factory('configuration', configuration);

  function configuration() {
    var apiBase = 'http://192.168.1.3:8088';
    return {
      apiBase: apiBase
    }
  }

})();