(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LookupController', LookupController);

  function LookupController($state, api) {
    var vm = this;

    vm.lookup = lookup;
    vm.register = register;

    function lookup() {
      api.request('GET', 'user/email/' + vm.email)
        .then(function(data) {
          if (data.uuid) {
            localStorage.setItem('user', data.uuid);
            $state.go('tab.dashboard');
          }
        });
    }

    function register() {
      $state.go('register');
    }
  }
})();