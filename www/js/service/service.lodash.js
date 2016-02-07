(function() {
  'use strict';

  angular.module('mhbb')
    .factory('_', _);

  function _($window) {
    return $window._;
  }

})();

