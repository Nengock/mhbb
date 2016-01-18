(function() {

  'use strict';

  angular.module('mhbb.services')
    .factory('localStorage', localStorage);

  function localStorage($window) {
    return {
      set: set,
      get: get,
      remove: remove,
      setObject: setObject,
      getObject: getObject
    };

    function set(key, value) {
      $window.localStorage[key] = value;
    }

    function get(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    }

    function remove(key) {
      $window.localStorage.removeItem(key);
    }

    function setObject(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }

    function getObject(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }

})();